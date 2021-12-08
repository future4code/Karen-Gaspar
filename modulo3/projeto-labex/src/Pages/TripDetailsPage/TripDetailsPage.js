import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { BASE_URL } from '../../constant/url';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { TripDetailsBody } from './style';

export const TripDetailsPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
    .get(`${BASE_URL}/karen-gaspar-carver/trip/:id`, {
      headers: {
        auth: token
      }
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err.res)
    })
  }, [])

    return (
      <TripDetailsBody >
        <h3>Detalhes</h3>
        <button onClick={goBack}>Voltar</button>
        <h3>Candidatos Pendentes</h3>
        <h3>Candidatos Aprovados</h3>
      </TripDetailsBody>
    );
  }
  