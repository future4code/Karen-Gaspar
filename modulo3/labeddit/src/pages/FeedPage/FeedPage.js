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
import { changePostVote, createPostVote, deletePostVote } from "../../services/votes"


const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [posts, updatePage] = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = (id) => {
    goToPostPage(history, id)
  }

  const onClickVote = (id, vote) => {
    const body = {
      direction: vote
    }
    if (vote === 1){
      createPostVote(id, body, updatePage)
    }else if (vote === -1){
      changePostVote(id, body, updatePage)
    }
  }

  const onClickDeleteVote = (id, updatePage) => {
    deletePostVote(id, updatePage)
  }
   
  const postsList = posts.map((post) =>{

    return ( 
    <PostCard 
    key={post.id}
    id={post.id}
    title={post.title}
    username={post.username}
    body={post.body}
    commentCount={post.commentCount}
    voteSum={post.voteSum}
    userVote={post.userVote}
    onClickCard={() => onClickCard(post.id)}
    onClickVote={onClickVote}
    onClickDeleteVote={() => onClickDeleteVote(post.id, updatePage)}
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