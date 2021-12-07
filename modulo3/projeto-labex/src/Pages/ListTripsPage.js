import React from 'react'
import {useHistory} from 'react-router-dom'

export const ListTripsPage = () => {
  
  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  const goToHomePage = () => {
    history.push("/")
  }

    return (
      <div >
        <h3>List Trips</h3>
        <button onClick={goToApplicationFormPage}>Ir para página de formulário</button>
        <button onClick={goToHomePage}>Voltar</button>
      </div>
    );
  };
  