import React from 'react'
import { useHistory } from 'react-router-dom'
import { CreateTripContainer, MainCreateTripContainer } from './style'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'
import { planets } from '../../constant/planets'
import axios from 'axios'
import { BASE_URL } from '../../constant/url'

export const CreateTripPage = () => {

  useProtectedPage()
  const history = useHistory()
  const { form, onChangeInputs, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const goBack = () => {
    history.goBack()
  }

  const createTrips = (body) => {
    axios
      .post(`${BASE_URL}/trips`, body, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then(() => {
        alert("Viagem cadastrada com sucesso!", form)
      })
      .catch(() => {
        alert("Ops, algo deu errado. Tente novamente mais tarde!")
      })
  }

  const createTrip = (event) => {
    event.preventDefault();
    createTrips(form)
    cleanFields();
  }

  return (
    <MainCreateTripContainer>
      <CreateTripContainer>
        <h3>Crie um Roteiro de Viagem</h3>
        <form onSubmit={createTrip}>
          <input
            placeholder="Roteiro"
            type="text"
            name={"name"}
            value={form.name}
            onChange={onChangeInputs}
            required
            pattern={"^.{10,}"}
            title={"O nome do roteiro deve ter no mínimo 10 letras"}
          />
          <select
            placeholder={"Planeta"}
            name={"planet"}
            value={form.planet}
            onChange={onChangeInputs}
            required>
            <option value={""} disabled>Escolha um Planeta</option>
            {planets.map((planet) => {
              return <option value={planet}>{planet}</option>
            })}
          </select>
          <input
            placeholder="Data"
            type="date"
            name={"date"}
            value={form.date}
            onChange={onChangeInputs}
            required
          />
          <input
            placeholder="Descrição"
            type="text"
            name={"description"}
            value={form.description}
            onChange={onChangeInputs}
            required
            pattern={"^.{30,}"}
            title={"A descrição deve ter no mínimo 30 letras"}
          />
          <input
            placeholder="Duração em dias"
            type="number"
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChangeInputs}
            required
            min={50}
          />
          <div>
            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>
          </div>
        </form>
      </CreateTripContainer>
    </MainCreateTripContainer>
  );
}
