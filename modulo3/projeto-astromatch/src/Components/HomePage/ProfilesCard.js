import { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import ChooseProfile from './ChooseProfile'
import HomeHeader from './HomeHeader';

const ProfileBody = styled.div`
margin: 0;
padding: 0;
width: 30vw;
margin: 0 auto;
`

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 25vw;
height: 60vh;
margin: 10px auto;
img{
  width: 100%;
  height: 90%;
  border-radius: 10px;
}
`

const ProfileDescription = styled.div`
position: absolute;
width: 24vw;
height: 50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: whitesmoke;
font-size: 17px;
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
      <ProfileDescription>
      <h3>{profile.name}, {profile.age}</h3> 
      <p>{profile.bio}</p>
      </ProfileDescription>
      
    </ProfileContainer>
    <ChooseProfile getProfileToChoose={getProfileToChoose} id={profile.id}/>
    </ProfileBody>
  );
}

export default ProfilesCard;
