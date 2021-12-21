import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPostVote = (id) => {
    const body = {"direction": 1}
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      console.log(res.data)
      // updatePage()
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  
  export const createCommentVote = (id) => {
    const body = {"direction": 1}
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      console.log(res.data)
      // updatePage()
    })
    .catch((err)=> {
      console.log(err)
    })
  }