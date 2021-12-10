import React from 'react'
import { useHistory } from 'react-router'
import {AdminTripsCardContainer} from './style'


export const AdminTripsCard = (props) => {

    const history = useHistory()
    const {name, getTrips} = props

    return (
        <AdminTripsCardContainer onClick={props.goToTripDetailsPage}>
            <p><strong>{name}</strong></p>
            <button>Remover</button>
        </AdminTripsCardContainer>
    )
}