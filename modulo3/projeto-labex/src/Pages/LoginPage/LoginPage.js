import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../constant/url';
import { useForm } from '../../hooks/useForm';
import { LoginContainer, LoginPageBody } from './style';

export const LoginPage = () => {
  
  const history = useHistory();
  const { form, onChangeInputs } = useForm({ email: "", password: ""})


  const onSubmitLogin = () => {
    
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
      localStorage.setItem('token', res.data.token);
      history.push("/admin/trips/list")
    })
    .catch(()=>{
      alert("Login inválido!")
    })
  }

  const goBack = () => {
    history.goBack()
  }

  const login = (event) => {
    event.preventDefault();
    onSubmitLogin(form)
  }

  return (
    <LoginPageBody>
    <LoginContainer >
      <h3>Login de Administração</h3>
      <form onSubmit={login}>
      <input
        placeholder="E-mail"
        type="email"
        name={"email"}
        value={form.email}
        onChange={onChangeInputs}
        required 
        />
      <input
        placeholder="Senha"
        type="password"
        name={"password"}
        value={form.password}
        onChange={onChangeInputs}
        required
        pattern={"^.{6,}$"}
        title={"A senha deve ter no mínimo 6 caracteres"} 
        />
      <div>
      <button>Entrar</button>
      <button onClick={goBack}>Voltar</button>
      </div>
      </form>
    </LoginContainer>
    </LoginPageBody>
  );
}
