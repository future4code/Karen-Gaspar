import React from 'react'
import { useHistory } from 'react-router-dom'
import { CreateTripContainer } from './style'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export const CreateTripPage = () => {

  useProtectedPage()

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <CreateTripContainer>
      <h3>CreateTripPage</h3>
      <input
      placeholder="Nome"/>
      <select>
        <option>Planetas</option>
      </select>
      <select>
        <option>data</option>
      </select>
      <input 
      placeholder="Descrição"/>
      <input
      placeholder="Duração em dias"/>
      <div>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
      </div>
    </CreateTripContainer>
  );
}
