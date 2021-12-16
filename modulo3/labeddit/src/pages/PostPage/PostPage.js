import React from "react"
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import PostForm from "./PostForm";
import { FormContainer, MainContainer } from "./styled";

const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  const allPosts = useRequestData([], `${BASE_URL}/posts`)
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  console.log(comments)

  const clickedPost = allPosts.filter((post) =>{
    return post.id === params.id
  }).map((post)=> {

  })

  const commentsList = comments.map((comment) => {
    return (
      <CommentCard
        key={comment.id}
        username={comment.username}
        body={comment.body}
        voteSum={comment.voteSum}
      />
    )
  })

  return (
    <MainContainer >
      <FormContainer>
        <PostForm id={params.id}/>
      </FormContainer>
      {commentsList.length > 0 ? commentsList : <Loading/>}
    </MainContainer>
  );
}

export default PostPage