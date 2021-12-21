import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clearFields, history, setRightButton, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clearFields()
      setIsLoading(false)
      goToFeedPage(history)
      setRightButton("Sair")
    })
    .catch((err) => {
      alert(err.response.data.message)
      setIsLoading(false)
    })
}
  export const signUp = (body, clearFields, history, setRightButton, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clearFields()
        setIsLoading(false)
        goToFeedPage(history)
        setRightButton("Sair")
      })
      .catch((err) => {
        alert(err.response.data.message)
        setIsLoading(false)
      })
  }
