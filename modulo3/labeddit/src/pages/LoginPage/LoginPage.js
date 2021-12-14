import React from "react"
import { InputsContainer, LogoImage, MainContainer } from "./styled"
import logo from "../../assets/alien.png"
import TextField from "@material-ui/core/TextField"
import {useForm} from "../../hooks/useForm"

const LoginPage = () => {
  
  const {form, onChangeInputs, clearFields} = useForm({email: "", password: ""})

  const onSubmitLogin = () =>{

  }

  return (
    <MainContainer >
      <LogoImage src={logo} alt="alien"/>
      <InputsContainer>
      <form onSubmit={onSubmitLogin}>
        <TextField
        label={"E-mail"}
        name={"email"}
        value={form.email}
        onChange={onChangeInputs}
        
        />
        <TextField
        label={"Senha"}
        name={"password"}
        value={form.password}
        onChange={onChangeInputs}
        
        />

      </form>
      </InputsContainer>
    </MainContainer>
  );
}

export default LoginPage;