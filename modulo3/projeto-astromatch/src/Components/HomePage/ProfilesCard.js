import {useState} from 'react'
import styled from 'styled-components';

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
    return (
      <ProfileContainer>
        <p>Perfil</p>
      </ProfileContainer>
    );
  }
  
  export default ProfilesCard;
  