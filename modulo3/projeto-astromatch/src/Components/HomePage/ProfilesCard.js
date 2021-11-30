import { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const ProfileContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 28vw;
height: 60vh;
margin: 10px auto;
img{
  width: 80%;
  height: 80%;
}
p{
  width: 20vw;
}`

const NameAndAge = styled.div`
display: flex;
justify-content: space-between;
width: 15vw;
`

function ProfilesCard() {

  const [profile, setProfile] = useState({})

  const getProfileToChoose = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/person`)
      .then(response => setProfile(response.data.profile))
      .catch(error => console.log(error))
  }

  useEffect(() => {

    getProfileToChoose()

  }, [])

  return (
    <ProfileContainer key={profile.id}>
      <img src={profile.photo}/>
      <NameAndAge>
      <h3>{profile.name}</h3> 
      <h3>{profile.age}</h3>
      </NameAndAge>
      <p>{profile.bio}</p>
    </ProfileContainer>
  );
}

export default ProfilesCard;
