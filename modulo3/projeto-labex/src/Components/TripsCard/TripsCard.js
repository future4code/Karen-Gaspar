import React from 'react'
import {TripsCardContainer} from './style'


export const TripsCard = (props) => {

    const {name, description, planet, durationInDays, date} = props.trip

    return (
        <TripsCardContainer>
            <p><strong>Nome: </strong>{name}</p>
            <p><strong>Descrição: </strong>{description}</p>
            <p><strong>Planeta: </strong>{planet}</p>
            <p><strong>Duração: </strong>{durationInDays}</p>
            <p><strong>Data: </strong>{date}</p>
        </TripsCardContainer>

    )
}