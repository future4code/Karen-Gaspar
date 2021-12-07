import React from 'react'
import {useHistory} from 'react-router-dom'

export const ApplicationFormPage = () => {
  
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

    return (
      <div >
        <h3>ApplicationFormPage</h3>
        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </div>
    );
  }
  
  