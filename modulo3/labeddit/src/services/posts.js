import axios from "axios"
import {BASE_URL} from "../constants/urls"

export const createPost = (body, clearFields) => {
    axios.post(`${BASE_URL}/posts`, body)
    .then((res)=> {localStorage.setItem("token", res.data.token)
    clearFields()
  })
  .catch((err)=> console.log(err.response))
  }