import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../../constant/url';

export const TripDetailsPage = () => {

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   axios.get(`${BASE_URL}/karen-gaspar-carver/trip/:id`, {
  //     headers: {
  //       auth: token
  //     }
  //   })
  //   .then((res)=>{
  //     console.log(res.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err.res)
  //   })
  // }, [])

    return (
      <div >
        <h3>TripDetailsPage</h3>
      </div>
    );
  }
  