import React from "react"
import { InputsContainer} from "./styled"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import axios from "axios"
import {BASE_URL} from "../../constants/urls"


const LoginForm = () => {

  const { form, onChangeInputs, clearFields } = useForm({ email: "", password: "" })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    login()
  }
   
  const login = () =>{
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res)=> {localStorage.setItem("token", res.data.token)
    clearFields()
  })
    .catch((err)=> alert("Há algo errado com o login! Verifique e tente novamente."))
  }

  return (
      <InputsContainer>
        <form onSubmit={onSubmitLogin}>
          <TextField
            type={"email"}
            label={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={onChangeInputs}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
          />
          <TextField
            type={"password"}
            label={"Senha"}
            name={"password"}
            value={form.password}
            onChange={onChangeInputs}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Entrar
          </Button>
        </form>
      </InputsContainer>
  );
}

export default LoginForm;