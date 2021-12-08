import axios from 'axios'
import { BASE_URL } from '../../constant/url'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ApplicationBody, FormContainer } from './style'
import { useRequestData } from '../../hooks/useRequestData'

export const ApplicationFormPage = () => {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }


  // const [name, setName] = useState('')
  // const [age, setAge] = useState('')
  // const [text, setText] = useState('')
  // const [profession, setProfession] = useState('')
  // const [country, setCountry] = useState([])

  // const applyToTrip = (tripId) => {

  //   const body = {
  //     name: name,
  //     age: age,
  //     text: text,
  //     profession: profession,
  //     country: country
  //   }

  //   axios.post(`${BASE_URL}/karen-gaspar-carver/trips/${tripId}/apply`, body)
  //   .then((res)=>{
  //     console.log(res)
  //     setName('')
  //     setAge('')
  //     setText('')
  //     setProfession('')
  //     setCountry([])
  //     alert("Candidatura realizada com sucesso. Boa sorte!")
  //   })
  //   .catch((err)=>{
  //     console.log(err.res);
  //   })
  // }

  // const handleName = (event) => {
  //   setName(event.target.value)
  // }
  // const handleAge = (event) => {
  //   setAge(event.target.value)
  // }
  // const handleText = (event) => {
  //   setText(event.target.value)
  // }
  // const handleProfession = (event) => {
  //   setProfession(event.target.value)
  // }

  // const [allTrips] = useRequestData("/trips")

  return (
    <ApplicationBody>
      <button onClick={goBack}>Voltar</button>
      <FormContainer >
        <h3>Cadastro do Candidato</h3>
        <select >
          <option>Escolha uma viagem</option>
          {/* {tripsOptions} */}
        </select>
        <input
          placeholder="Nome"
          type="text"
        // value={name}
        // onChange={handleName}
        />
        <input
          placeholder="Idade"
          type="number"
        // value={age}
        // onChange={handleAge}
        />
        <input
          placeholder="Texto de candidatura"
          type="text"
        // value={text}
        // onChange={handleText}
        />
        <input
          placeholder="Profissão"
          type="text"
        // value={profession}
        // onChange={handleProfession}
        />
        <select>
          <option>Escolha um País</option>
        </select>
        <div>
          {/* <button onClick={applyToTrip}>Enviar</button> */}
        </div>
      </FormContainer>
    </ApplicationBody>
  );
}

