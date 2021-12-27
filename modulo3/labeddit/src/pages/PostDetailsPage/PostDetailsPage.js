import React from "react"
import { useParams } from "react-router-dom";
import ClickedPostCard from "../../components/ClickedPostCard/ClickedPostCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { changeCommentVote, createCommentVote, deleteCommentVote } from "../../services/votes";
import PostDetailsForm from "./PostDetailsForm";
import { FormContainer, MainContainer } from "./styled";

const PostDetailsPage = () => {
  useProtectedPage()
  const params = useParams()
  const [allPosts] = useRequestData([], `${BASE_URL}/posts`)
  const [comments, updatePage] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  const onClickVote = (id, vote) => {
    const body = {
      direction: vote
    }
    if (vote === 1){
      createCommentVote(id, body, updatePage)
    }else if (vote === -1){
      changeCommentVote(id, body, updatePage)
    }
  }

  const onClickDeleteVote = (id, updatePage) => {
    deleteCommentVote(id, updatePage)
  }

  const clickedPost = allPosts
    .filter((post) => {
      return post.id === params.id
    })
    .map((post) => {
      return (
        <ClickedPostCard
          key={post.id}
          username={post.username}
          body={post.body}
          commentCount={post.commentCount}
          voteSum={post.voteSum}
        />
      )
    })

  const commentsList = comments.map((comment) => {
    return (
      <CommentCard
        key={comment.id}
        id={comment.id}
        username={comment.username}
        body={comment.body}
        userVote={comment.userVote}
        voteSum={comment.voteSum}
        onClickVote={onClickVote}
        onClickDeleteVote={() => onClickDeleteVote(comment.id, updatePage)}
      />
    )
  })
  return (
    <MainContainer >
      {clickedPost}
      <FormContainer>
        <PostDetailsForm id={params.id} updatePage={updatePage}/>
      </FormContainer>
      {commentsList.length > 0 ? commentsList : <Loading />}
    </MainContainer>
  );
}

export default PostDetailsPage