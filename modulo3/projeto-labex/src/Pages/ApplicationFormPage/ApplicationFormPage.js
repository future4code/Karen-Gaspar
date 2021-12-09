import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { ApplicationBody, FormContainer } from './style'
import { countries} from '../../constant/countries'
// import { useRequestData } from '../../hooks/useRequestData'

export const ApplicationFormPage = () => {

  const history = useHistory()
  const { form, onChangeInputs, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

  const goBack = () => {
    history.goBack()
  }

  const register = (event) => {
    event.preventDefault();
    alert("Sua inscrição foi realizada com sucesso. Boa sorte!", form);
    cleanFields();
  };

  return (
    <ApplicationBody>
      <FormContainer >
        <h3>Formulário de inscrição</h3>
        <form onSubmit={register}>
          <select >
            <option>Escolha uma viagem</option>
          </select>
          <input
            placeholder="Nome"
            type="text"
            name={"name"}
            value={form.name}
            onChange={onChangeInputs}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <input
            placeholder="Idade"
            type="number"
            name={"age"}
            value={form.age}
            onChange={onChangeInputs}
            required
            min={18}
          />
          <input
            placeholder="Texto de candidatura"
            type="text"
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChangeInputs}
            required
            pattern={"^.{30,}"}
            title={"O texto deve ter no mínimo 30 caracteres"}
          />
          <input
            placeholder="Profissão"
            type="text"
            name={"profession"}
            value={form.profession}
            onChange={onChangeInputs}
            required
            pattern={"^.{10,}$"}
            title={"A profissão deve ter no mínimo 10 caracteres"}
          />
          <select placeholder={"País"}
            name={"country"}
            value={form.country}
            onChange={onChangeInputs}
            required>
            <option value={""} disabled >Escolha um País</option>
            {countries.map((country)=>{
              return <option value={country}>{country}</option>
            })}
          </select>
          <div>
            <button>Enviar</button>
            <button onClick={goBack}>Voltar</button>
          </div>
        </form>
      </FormContainer>
    </ApplicationBody>
  );
}

