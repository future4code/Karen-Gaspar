import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { TripsCard } from '../../Components/TripsCard/TripsCard'
import { BASE_URL } from '../../constant/url'
import { Buttons, TripsListContainer } from './style'

export const TripsListPage = () => {

  const [trips, setTrips] = useState([])

  const getTrips = () => {
    axios.get(`${BASE_URL}/karen-gaspar-carver/trips`)
      .then((res) => {
        setTrips(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTrips();
  }, []);


  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  const goToHomePage = () => {
    history.push("/")
  }

  console.log(trips)


  return (
    <div>
      <TripsListContainer >
        <h3>Viagens</h3>
        <Buttons>
          <button onClick={goToApplicationFormPage}>Ir para página de formulário</button>
          <button onClick={goToHomePage}>Voltar</button>
        </Buttons>
        <TripsCard/>
      </TripsListContainer>
    </div>

  );
};
