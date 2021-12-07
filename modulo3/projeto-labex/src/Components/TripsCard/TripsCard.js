import React from 'react'
import {TripsCardContainer} from './style'


export const TripsCard = (props) => {


    return (
        <TripsCardContainer>
            <p><strong>Nome: </strong></p>
            <p><strong>Descrição:</strong></p>
            <p><strong>Planeta:</strong></p>
            <p><strong>Duração:</strong></p>
            <p><strong>Data:</strong></p>
        </TripsCardContainer>

    )
}