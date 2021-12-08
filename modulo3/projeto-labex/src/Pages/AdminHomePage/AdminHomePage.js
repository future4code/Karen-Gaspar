import React from 'react'
import {useHistory} from 'react-router-dom'
import { AdminTripsCard } from '../../Components/AdminTripsCard/AdminTripsCard';
import { AdminTripsContainer } from './style';
import { useProtectedPage } from '../../hooks/useProtectedPage';


export const AdminHomePage = () => {

  useProtectedPage()

    const history = useHistory();

    const goBack = () => {
      history.goBack()
    }

    const goToCreateTripPage = () => {
      history.push("/admin/trips/create")
    }

    const goToTripDetailsPage = () => {
      history.push("/admin/trips/:id")
    }

    return (
      <AdminTripsContainer >
        <h3>Painel Administrativo</h3>
        <AdminTripsCard goToTripDetailsPage={goToTripDetailsPage}/>
        <div>
        <p onClick={goBack}>Voltar</p>
        <p onClick={goToCreateTripPage}>Criar Viagem</p>
        <p>Logout</p>
        </div>
      </AdminTripsContainer>
    );
  }
  