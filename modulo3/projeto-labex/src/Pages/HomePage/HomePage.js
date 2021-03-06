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
        <p>Já pensou em fazer uma viagem espacial?</p> 
        <p>Veja aqui as opções disponíveis!</p>
        <div>
        <button onClick={goToListTripsPage}>Ver viagens</button>
        <button onClick={goToLoginPage}>Login Administração</button>
        </div>
      </HomePageContainer>
    );
  };
