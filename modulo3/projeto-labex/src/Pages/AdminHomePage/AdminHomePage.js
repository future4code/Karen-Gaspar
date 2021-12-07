import React from 'react'
import {useHistory} from 'react-router-dom'
import { AdminTripsCard } from '../../Components/AdminTripsCard/AdminTripsCard';
import { AdminTripsContainer } from './style';


export const AdminHomePage = () => {

    const history = useHistory();

    const goBack = () => {
      history.goBack()
    }

    const goToCreateTripPage = () => {
      history.push("/admin/trips/create")
    }

    return (
      <AdminTripsContainer >
        <h3>Painel Administrativo</h3>
        <AdminTripsCard/>
        <div>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>
        <button>Logout</button>
        </div>
      </AdminTripsContainer>
    );
  }
  