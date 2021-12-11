import axios from 'axios'
import React, { useState } from 'react'
import { AdminTripsCardContainer } from './style'
import { BASE_URL } from '../../constant/url'


export const AdminTripsCard = (props) => {

    const { trip, goToTripDetailsPage } = props

    const deleteTrip = (id) => {
        axios
            .delete(`${BASE_URL}/trips/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.res.message)
            })
    }

    return (
        <AdminTripsCardContainer onClick={() => { goToTripDetailsPage(trip.id) }}>
            <p><strong>{trip.name}</strong></p>
            <div>
                <button onClick={deleteTrip}>Remover</button>
            </div>

        </AdminTripsCardContainer>
    )
}