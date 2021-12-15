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

  // const clickedPost = allPosts.filter((post) =>{
  //   return post.id === post.id})
 

  return (
    <div >
      <h4>Post Page</h4>
      {/* {post && post.body} */}
    </div>
  );
}

export default PostPage;