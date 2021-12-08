import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../constant/url';
import { LoginContainer } from './style';

export const LoginPage = () => {
  
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}/karen-gaspar-carver/login`, body)
    .then((res)=>{
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      history.push("/admin/trips/list")
    })
    .catch((err)=>{
      console.log(err.res)
    })
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <LoginContainer >
      <h3>Login de Administração</h3>
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={onChangeEmail} />
      <input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={onChangePassword} />
      <button onClick={onSubmitLogin}>Entrar</button>
      <button onClick={goBack}>Voltar</button>
    </LoginContainer>
  );
}
