import React from 'react'
import {useHistory} from 'react-router-dom'
import { LoginContainer } from './style';

export const LoginPage = () => {
  
  const history = useHistory();

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list")
  }

  const goBack = () => {
    history.goBack()
  }

    return (
      <LoginContainer >
        <h3>Login de Administração</h3>
        <input></input>
        <input></input>
        <button onClick={goToAdminHomePage}>Entrar</button>
        <button onClick={goBack}>Voltar</button>
      </LoginContainer>
    );
  }
