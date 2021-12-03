import { useState, useEffect } from 'react'
import { ProfileBody, ProfileContainer, ProfileDescription } from './styles'
import axios from 'axios'
import ChooseProfile from './ChooseProfile'
import HomeHeader from './HomeHeader'


function ProfilesCard(props) {

  const [profile, setProfile] = useState({})
  const [nextProfile, setNextProfile] = useState(0)
  // const [carregando, setCarregando] = useState("")

  const getProfileToChoose = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/person`)
      .then(response => setProfile(response.data.profile))
      .catch(error => console.log(error.data))
  }

  useEffect(() => {

    getProfileToChoose()

  }, [])

  const toNextProfile = () => {
    setNextProfile(nextProfile + 1)
  }

  return (
    <ProfileBody>
    <HomeHeader changePage={props.changePage}/>
    <ProfileContainer key={profile.id}>
      <img src={profile.photo}/>
      <ProfileDescription>
      <h3>{profile.name}, {profile.age}</h3> 
      <p>{profile.bio}</p>
      </ProfileDescription>
    </ProfileContainer>
    <ChooseProfile getProfileToChoose={getProfileToChoose} id={profile.id} toNextProfile={toNextProfile}/>
    </ProfileBody>
  );
}

export default ProfilesCard;
