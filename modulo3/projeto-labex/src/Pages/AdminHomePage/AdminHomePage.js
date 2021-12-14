import React from 'react'
import { useHistory } from 'react-router-dom'
import { AdminTripsCard } from '../../Components/AdminTripsCard/AdminTripsCard';
import { AdminTripsContainer, MainAdminHomeContainer } from './style';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';


export const AdminHomePage = () => {

  useProtectedPage()
  const history = useHistory();
  const [tripsAdmin, getTripsAdmin] = useRequestData('/trips')
  
  const goBack = () => {
    history.goBack()
  }

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create")
  }

  const goToTripDetailsPage = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  const tripsListAdmin = tripsAdmin && tripsAdmin.map((trip) => {
    return <AdminTripsCard key={trip.id} trip={trip} getTripsAdmin={getTripsAdmin} goToTripDetailsPage={goToTripDetailsPage} />
  })

  return (
    <MainAdminHomeContainer>
        <h3>Painel Administrativo</h3>
        <div>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>
        <button>Logout</button>
      </div>
      <AdminTripsContainer  >
          {tripsListAdmin && tripsListAdmin.length > 0 ? tripsListAdmin : <p>Carregando...</p>}
      </AdminTripsContainer>
    </MainAdminHomeContainer>
  );
}
