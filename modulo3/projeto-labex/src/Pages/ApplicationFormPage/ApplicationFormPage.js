import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormContainer } from './style'

export const ApplicationFormPage = () => {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <FormContainer >
      <h3>Cadastro do Candidato</h3>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <div>
        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </div>
    </FormContainer>
  );
}

