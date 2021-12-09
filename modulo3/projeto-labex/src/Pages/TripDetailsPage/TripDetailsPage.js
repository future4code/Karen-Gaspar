import { useHistory, useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { MainContainer, TripDetailsContainer } from './style';

export const TripDetailsPage = () => {

  useProtectedPage()
  const history = useHistory()
  const { id } = useParams()
  const [tripDetails] = useRequestData(`/trip/${id}`)

  const goBack = () => {
    history.goBack()
  }

  console.log(tripDetails)

  return (
    <MainContainer>
      <TripDetailsContainer >
        <h3>Detalhes da Viagem</h3>
        {tripDetails && tripDetails.trip && <h4>{tripDetails.trip.name}</h4>}
        {tripDetails && tripDetails.trip && <div>
          <p><strong>Nome:</strong> {tripDetails.trip.name}</p>
          <p><strong>Descrição:</strong> {tripDetails.trip.description}</p>
          <p><strong>Planeta:</strong> {tripDetails.trip.planet}</p>
          <p><strong>Duração:</strong> {tripDetails.trip.durationInDays}</p>
          <p><strong>Data:</strong> {tripDetails.trip.date}</p>
        </div>}
        <h3>Candidatos Pendentes</h3>
        <h3>Candidatos Aprovados</h3>
      </TripDetailsContainer>
      <button onClick={goBack}>Voltar</button>
    </MainContainer>
  );
}
