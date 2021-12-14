import React from "react"
import { LogoImage, MainContainer, SignUpContainer } from "./styled"
import logo from "../../assets/alien.png"
import { Button } from "@material-ui/core"
import {useHistory} from 'react-router-dom'
import {goToSignUpPage} from '../../routes/coordinator'
import LoginForm from "./LoginForm"


const LoginPage = () => {

  const history = useHistory()

  return (
    <MainContainer >
      <LogoImage src={logo} alt="alien" />
      <LoginForm/>
      <SignUpContainer >
        <Button
          onClick={() => goToSignUpPage(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpContainer>
    </MainContainer >
  );
}

export default LoginPage;