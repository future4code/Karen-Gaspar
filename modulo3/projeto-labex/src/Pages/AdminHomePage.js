import React from 'react'
import {useHistory} from 'react-router-dom'

export const AdminHomePage = () => {

    const history = useHistory();

    const goBack = () => {
      history.goBack()
    }

    const goToCreateTripPage = () => {
      history.push("/admin/trips/create")
    }

    return (
      <div >
        <h3>AdminHomePage</h3>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>
        <button>Logout</button>
      </div>
    );
  }
  