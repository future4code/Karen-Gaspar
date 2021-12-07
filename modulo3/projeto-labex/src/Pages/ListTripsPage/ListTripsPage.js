import React from 'react'
import {useHistory} from 'react-router-dom'
import { TripsCard } from '../../Components/TripsCard/TripsCard';
import { Buttons, ListTripsContainer } from './style';

export const ListTripsPage = () => {
  
  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  const goToHomePage = () => {
    history.push("/")
  }

    return (
      <div>
        <ListTripsContainer >
        <h3>Viagens</h3>
        <Buttons>
        <button onClick={goToApplicationFormPage}>Ir para página de formulário</button>
        <button onClick={goToHomePage}>Voltar</button>
        </Buttons>
        <TripsCard/>
      </ListTripsContainer>
      </div>

    );
  };
  