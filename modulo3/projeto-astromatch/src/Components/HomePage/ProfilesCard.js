import {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';

const ProfileContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 28vw;
height: 60vh;
margin: 10px auto;`


function ProfilesCard() {

  const getProfileToChoose = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/person`)
    .then (response => console.log(response.data))
    .catch(error => console.log(error))
  }

  useEffect(()=> {
    getProfileToChoose()
  }, [])

    return (
      <ProfileContainer>
        {getProfileToChoose}
      </ProfileContainer>
    );
  }
  
  export default ProfilesCard;
  