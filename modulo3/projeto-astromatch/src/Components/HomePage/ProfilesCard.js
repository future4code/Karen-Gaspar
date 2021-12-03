import { useState, useEffect } from 'react'
import { ProfileBody, ProfileContainer, ProfileDescription } from './styles'
import axios from 'axios'
import ChooseProfile from './ChooseProfile'
import HomeHeader from './HomeHeader'


function ProfilesCard(props) {

  const [profile, setProfile] = useState({})
  const [carregando, setCarregando] = useState("")

  const getProfileToChoose = () => {
    setCarregando("carregando")
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/person`)
      .then(response => 
        setProfile(response.data.profile), 
        setCarregando("Carregou"),
        console.log(carregando))
      .catch(error => console.log(error),
      setCarregando("Deu erro"))
  }

  useEffect(() => {

    getProfileToChoose()

  }, [])

  return (
    <ProfileBody>
    <HomeHeader changePage={props.changePage}/>
    {carregando === "carregando" ? <h2>Carregando...</h2> : 
    <ProfileContainer key={profile.id}>
      <img src={profile.photo}/>
      <ProfileDescription>
      <h3>{profile.name}, {profile.age}</h3> 
      <p>{profile.bio}</p>
      </ProfileDescription>
    </ProfileContainer>}
    <ChooseProfile getProfileToChoose={getProfileToChoose} id={profile.id} />
    </ProfileBody>
  );
}

export default ProfilesCard;
