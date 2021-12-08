import React from 'react'
import {AdminTripsCardContainer} from './style'


export const AdminTripsCard = (props) => {

    return (
        <AdminTripsCardContainer onClick={props.goToTripDetailsPage}>
            <p><strong>Nome:</strong></p>
            <button>Remover</button>
        </AdminTripsCardContainer>
    )
}