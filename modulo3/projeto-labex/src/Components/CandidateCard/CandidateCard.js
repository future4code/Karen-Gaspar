import React from 'react'
import { CandidateCardContainer } from './style'

export const CandidateCard = (props) => {
    const {candidate, getTripsDetails, pathParams} = props

    return (
        <CandidateCardContainer>
            <p>Candidato</p>
            <p><b>Nome: </b>{candidate.name}</p>
            <p><b>Profissão: </b>{candidate.profession}</p>
            <p><b>Idade: </b>{candidate.age}</p>
            <p><b>País: </b>{candidate .country}</p>
            <p><b>Texto de Candidatura: </b>{candidate.applicationText}</p>
            <button>Aprovar</button>
            <button>Reprovar</button>
        </CandidateCardContainer>
    )
}

