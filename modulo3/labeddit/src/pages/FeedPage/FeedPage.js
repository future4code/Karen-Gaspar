import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import PostCard from "../../components/PostCard/PostCard"
import { goToPostPage } from "../../routes/coordinator"
import {useHistory} from 'react-router-dom'


const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  

  const onClickCard = (id) => {
    goToPostPage(history, id)
  }

  const postsList = posts.map((post) =>{

    return ( 
    <PostCard 
    key={post.id}
    username={post.username}
    body={post.body}
    commentCount={post.commentCount}
    voteSum={post.voteSum}
    onClick={() => onClickCard(post.id)}
    />
    )
  })

  return (
    <div >
      {postsList}
    </div>
  );
}

export default FeedPage;