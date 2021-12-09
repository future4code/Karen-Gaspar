import { useHistory, useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { MainContainer, TripDetailsContainer } from './style';

export const TripDetailsPage = () => {

  useProtectedPage()
  const history = useHistory()
  const {id} = useParams()
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

  const goBack = () => {
    history.goBack()
  }

  console.log(tripDetails)
  


    return (
      <MainContainer>
        <TripDetailsContainer >
        <h3>Detalhes da Viagem</h3>
        <h3>Candidatos Pendentes</h3>
        <h3>Candidatos Aprovados</h3>
        </TripDetailsContainer>
        <button onClick={goBack}>Voltar</button>
      </MainContainer>
    );
  }
  