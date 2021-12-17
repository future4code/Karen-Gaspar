import React from "react"
import { useParams } from "react-router-dom";
import ClickedPostCard from "../../components/ClickedPostCard/ClickedPostCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { createCommentVote } from "../../services/posts";
import PostDetailsForm from "./PostDetailsForm";
import { FormContainer, MainContainer } from "./styled";

const PostDetailsPage = () => {
  useProtectedPage()
  const params = useParams()
  const allPosts = useRequestData([], `${BASE_URL}/posts`)
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  const onClickVote = (id) => {
    createCommentVote(id)
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
        username={comment.username}
        body={comment.body}
        voteSum={comment.voteSum}
        onClickVote={() => onClickVote(comment.id)}
      />
    )
  })

  return (
    <MainContainer >
      {clickedPost}
      <FormContainer>
        <PostDetailsForm id={params.id} />
      </FormContainer>
      {/* {commentsList.length === 0 ? (<Typography>Não há nenhum comentário!</Typography>) : commentsList} */}
      {commentsList.length > 0 ? commentsList : <Loading />}
    </MainContainer>
  );
}

export default PostDetailsPage