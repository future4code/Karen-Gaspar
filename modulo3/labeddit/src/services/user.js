import axios from "axios"
import {BASE_URL} from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clearFields, history, setRightButton) =>{
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=> {localStorage.setItem("token", res.data.token)
    clearFields()
    goToFeedPage(history)
    setRightButton("Logout")
  })
    .catch((err)=> alert(err.response.data.message))
}

export const signUp = (body, clearFields, history, setRightButton) =>{
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {localStorage.setItem("token", res.data.token)
  clearFields()
  goToFeedPage(history)
  setRightButton("Logout")
})
.catch((err)=> alert(err.response.data.message))
}

