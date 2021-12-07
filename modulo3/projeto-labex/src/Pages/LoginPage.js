import React from 'react'
import {useHistory} from 'react-router-dom'

export const LoginPage = () => {
  
  const history = useHistory();

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list")
  }

  const goBack = () => {
    history.goBack()
  }

    return (
      <div >
        <h3>Login</h3>
        <button onClick={goToAdminHomePage}>Entrar</button>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
