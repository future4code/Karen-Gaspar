import React from 'react'
import {useHistory} from 'react-router-dom'

export const HomePage = () => {

  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list")
  }
  const goToLoginPage = () => {
    history.push("/login")
  }

    return (
      <div >
        <h3>HomePage</h3>
        <button onClick={goToListTripsPage}>Ir para página de lista de viagens</button>
        <button onClick={goToLoginPage}>Ir para página de login de admin</button>
      </div>
    );
  };
