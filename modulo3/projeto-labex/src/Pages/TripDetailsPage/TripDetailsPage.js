import { useHistory, useParams } from 'react-router-dom';
import { CandidateCard } from '../../Components/CandidateCard/CandidateCard';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { MainContainer, TripDetailsContainer } from './style';

export const TripDetailsPage = () => {

  useProtectedPage()
  const history = useHistory()
  const pathParams = useParams()
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${pathParams}`)

  const goBack = () => {
    history.goBack()
  }

  const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
    return <CandidateCard key={candidate.id} candidate={candidate} pathParams={pathParams} getTripDetails={getTripDetails} />
})

  return (
    <MainContainer>
      <h3>Detalhes da Viagem</h3>
      <TripDetailsContainer >
        {tripDetails && tripDetails.trip && <h4>{tripDetails.trip.name}</h4>}
        {tripDetails && tripDetails.trip && <div>
          <p><strong>Nome:</strong> {tripDetails.trip.name}</p>
          <p><strong>Descrição:</strong> {tripDetails.trip.description}</p>
          <p><strong>Planeta:</strong> {tripDetails.trip.planet}</p>
          <p><strong>Duração:</strong> {tripDetails.trip.durationInDays}</p>
          <p><strong>Data:</strong> {tripDetails.trip.date}</p>
        </div>}
        </TripDetailsContainer>
        {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}
        <h3>Candidatos Aprovados</h3>
      
      <button onClick={goBack}>Voltar</button>
    </MainContainer>
  );
}
