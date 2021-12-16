import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPost = (body, clearFields, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      alert("Post postado")
      clearFields()
      setIsLoading(false)
    })
    .catch((err) => {
      alert(err)
      setIsLoading(false)
    })
}

export const createComment = (id, body, clearFields) => {
  
  axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      alert("Comentário criado com sucesso!")
      clearFields()
    })
    .catch((err) => {
      console.log(err.res)
    })
}

export const createPostVote = (id) => {
  const body = {"direction": 1}
  axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    alert(res.data)
  })
  .catch((err)=> {
    console.log(err.res)
  })
}