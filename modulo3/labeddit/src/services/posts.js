import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPost = (body, clearFields, setIsLoading, updatePage) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      updatePage()
      clearFields()
      setIsLoading(false)
    })
    .catch((err) => {
      alert(err)
      setIsLoading(false)
    })
}

export const createComment = (id, body, clearFields, setIsLoading, updatePage) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      updatePage()
      clearFields()
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err.res)
      setIsLoading(false)
    })
}

export const createPostVote = (id, updatePage) => {
  const body = {"direction": 1}
  axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    console.log(res.data)
    updatePage()
  })
  .catch((err)=> {
    console.log(err.res)
  })
}

export const createCommentVote = (id, updatePage) => {
  const body = {"direction": 1}
  axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    console.log(res.data)
    updatePage()
  })
  .catch((err)=> {
    console.log(err.res)
  })
}