import { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import ChooseProfile from './ChooseProfile'
import HomeHeader from './HomeHeader';

const ProfileBody = styled.div`
background-color: white;
border: 1px solid black;
margin: 0;
padding: 0;
width: 33vw;
margin: 0 auto;
`

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

function ProfilesCard(props) {

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
    <ProfileBody>
    <HomeHeader />
    <ProfileContainer key={profile.id}>
      <img src={profile.photo}/>
      <NameAndAge>
      <h3>{profile.name}</h3> 
      <h3>{profile.age}</h3>
      </NameAndAge>
      <p>{profile.bio}</p>
    </ProfileContainer>
    <ChooseProfile getProfileToChoose={getProfileToChoose} id={profile.id}/>
    </ProfileBody>
  );
}

export default ProfilesCard;
