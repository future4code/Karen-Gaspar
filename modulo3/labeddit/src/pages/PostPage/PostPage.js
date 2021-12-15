import React from "react"
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  // const allPosts = useRequestData([], `${BASE_URL}/posts`)
  const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  console.log(params)

  // const clickedPost = allPosts.filter((post) =>{

  //   return ( 
  //   <div key={post.id}>
  //   {post.username}
  //   {post.body}
  //   </div> 
  //   )
  // })

  return (
    <div >
      <h4>Post Page</h4>
      {/* {post && post.body} */}
    </div>
  );
}

export default PostPage;