import React from 'react'
import { useHistory } from 'react-router-dom'
import { CreateTripContainer } from './style'

export const CreateTripPage = () => {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <CreateTripContainer>
      <h3>CreateTripPage</h3>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <div>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
      </div>
    </CreateTripContainer>
  );
}
