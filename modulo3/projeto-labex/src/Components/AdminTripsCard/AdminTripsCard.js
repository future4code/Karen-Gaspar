// import axios from 'axios'
import React from 'react'
import {AdminTripsCardContainer} from './style'
// import {BASE_URL} from '../../constant/url'


export const AdminTripsCard = (props) => {

    const {trip, goToTripDetailsPage} = props

    return (
        <AdminTripsCardContainer onClick={() => {goToTripDetailsPage(trip.id)}}>
            <p><strong>{trip.name}</strong></p>
            <button>Remover</button>
        </AdminTripsCardContainer>
    )
}