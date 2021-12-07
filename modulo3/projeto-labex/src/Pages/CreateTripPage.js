import React from 'react'
import {useHistory} from 'react-router-dom'

export const CreateTripPage = () => {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

    return (
      <div >
        <h3>CreateTripPage</h3>
        <button onClick={goBack}>Voltar</button>
        <button>Criar</button>
      </div>
    );
  }
  