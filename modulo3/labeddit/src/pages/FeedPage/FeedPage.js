import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import PostCard from "../../components/PostCard/PostCard"


const FeedPage = () => {
  useProtectedPage()
  const posts = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = () => {

  }

  const postsList = posts.map((post) =>{
    return <PostCard 
    key={post.id}
    username={post.username}
    body={post.body}
    onClick={onClickCard}
    />
  })

  return (
    <div >
      {postsList}
    </div>
  );
}

export default FeedPage;