import React, { useState } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import PostCard from "../../components/PostCard/PostCard"
import { goToPostPage } from "../../routes/coordinator"
import {useHistory} from 'react-router-dom'
import { MainContainer, FormContainer } from "./styled"
import FeedForm from "./FeedForm"
import Loading from "../../components/Loading/Loading"
import { createPostVote } from "../../services/votes"


const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [posts, updatePage] = useRequestData([], `${BASE_URL}/posts`)
  const [upVote, setUpVote] = useState(false)
  const [downVote, setDownVote] = useState(false)
  

  const onClickCard = (id) => {
    goToPostPage(history, id)
  }

  const onClickUpVote = (id, vote) => {
    const body = {
      direction: vote
    }
    if (vote === 1){
      setUpVote(true)
      createPostVote(id, body, updatePage)
    }else{
      setUpVote(false)
    }
  }

  const onClickDownVote = (id, vote) => {
    const body = {
      direction: vote
    }
    if (vote === -1){
      setDownVote(true)
      createPostVote(id, body, updatePage)
    }else{
      setDownVote(false)
    }
  }
   
  const postsList = posts.map((post) =>{

    return ( 
    <PostCard 
    key={post.id}
    title={post.title}
    username={post.username}
    body={post.body}
    commentCount={post.commentCount}
    voteSum={post.voteSum}
    onClickCard={() => onClickCard(post.id)}
    onClickUpVote={() => onClickUpVote(post.id)}
    onClickDownVote={() => onClickDownVote(post.id)}
    />
    )
  })

  return (
    <MainContainer>
      <FormContainer>
        <FeedForm updatePage={updatePage}/>
      </FormContainer>
      {postsList.length > 0 ? postsList : <Loading/>}
    </MainContainer>
  );
}

export default FeedPage;