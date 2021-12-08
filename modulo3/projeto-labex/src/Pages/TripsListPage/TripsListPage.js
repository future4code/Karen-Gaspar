
import { useHistory } from 'react-router-dom'
import { TripsCard } from '../../Components/TripsCard/TripsCard'
import { useRequestData } from '../../hooks/useRequestData'
import { Buttons, TripsListContainer } from './style'

export const TripsListPage = () => {

  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  const goToHomePage = () => {
    history.push("/")
  }

  const [trips, isLoading, error] = useRequestData(`/trips`);

  const tripsList =
    trips &&
    trips.map((trip) => {
      return (
        <TripsCard key={trip.id} trip={trip} />
      );
    });

  return (
    <div>
      <Buttons>
        <button onClick={goToApplicationFormPage}>Inscreva-se</button>
        <button onClick={goToHomePage}>Voltar</button>
      </Buttons>
      <TripsListContainer >
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro...</p>}
        {!isLoading && trips && trips.length > 0 && tripsList}
        {!isLoading && trips && trips.length === 0 && (
          <p>Não há nenhuma viagem!</p>
        )}
      </TripsListContainer>
    </div>
  );
};
