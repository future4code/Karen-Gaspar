import React from 'react'
import {useHistory} from 'react-router-dom'
import { HomePageContainer } from '../HomePage/style'

export const HomePage = () => {

  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list")
  }
  const goToLoginPage = () => {
    history.push("/login")
  }

    return (
      <HomePageContainer >
        <p>Já pensou em fazer uma viagem espacial? Veja aqui as opções disponíveis!</p>
        <button onClick={goToListTripsPage}>Ir para página de lista de viagens</button>
        <button onClick={goToLoginPage}>Ir para página de login de admin</button>
      </HomePageContainer>
    );
  };
