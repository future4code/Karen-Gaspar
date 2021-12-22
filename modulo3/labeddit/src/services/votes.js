import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPostVote = (id, body, updatePage) => {
  axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      console.log(res.data)
      updatePage()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const createCommentVote = (id, body, updatePage) => {
  axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      console.log(res.data)
      updatePage()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const changePostVote = (id, body, updatePage) => {
  axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      console.log(res.data)
      updatePage()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const changeCommentVote = (id, body, updatePage) => {
  axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((res) => {
      console.log(res.data)
      updatePage()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const deletePostVote = (id, updatePage) => {
  axios.delete(`${BASE_URL}/posts/${id}/votes`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    console.log(res.data)
    updatePage()
  })
  .catch((err) => {
    console.log(err)
  })
}

export const deleteCommentVote = (id, updatePage) => {
  axios.delete(`${BASE_URL}/comments/${id}/votes`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    console.log(res.data)
    updatePage()
  })
  .catch((err) => {
    console.log(err)
  })
}
