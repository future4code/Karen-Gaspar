import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import PostCard from "../../components/PostCard/PostCard"
import { goToPostPage } from "../../routes/coordinator"
import {useHistory} from 'react-router-dom'
import { MainContainer, FormContainer } from "./styled"
import FeedForm from "./FeedForm"
import Loading from "../../components/Loading/Loading"
import { createPostVote } from "../../services/posts"


const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  

  const onClickCard = (id) => {
    goToPostPage(history, id)
  }

  const onClickVote = (id) => {
    createPostVote(id)
  }
   
  const postsList = posts.map((post) =>{

    return ( 
    <PostCard 
    key={post.id}
    username={post.username}
    body={post.body}
    commentCount={post.commentCount}
    voteSum={post.voteSum}
    onClickCard={() => onClickCard(post.id)}
    onClickVote={() => onClickVote(post.id)}
    />
    )
  })

  return (
    <MainContainer>
      <FormContainer>
        <FeedForm/>
      </FormContainer>
      {postsList.length > 0 ? postsList : <Loading/>}
    </MainContainer>
  );
}

export default FeedPage;