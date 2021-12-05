import {useState} from 'react'
import {LikeContainer} from './styles';
import axios from 'axios'
import like from '../img/like.png'
import dislike from '../img/dislike.png'


function HomePage(props) {

  const [likeProfile, setLikeProfile] = useState(null)

  const choosePerson = () => {

    const body = {
      id: props.id,
      choice: likeProfile  
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/choose-person",
    body)
    .then(response => console.log(response.data), setLikeProfile(null))
    .catch(()=> alert('Ops, parece que houve um erro! Atualize a página ou tente novamente mais tarde.'))
  }

  const likedProfile = () => {
    props.toNextProfile()
    choosePerson()
    setLikeProfile(true)
  }

  const disLikedProfile = () => {
    props.toNextProfile()
    setLikeProfile(false)
  }

    return (
        <LikeContainer>
        <button onClick={disLikedProfile}><img src={dislike} alt="Ícone de dar disike"/></button>
        <button onClick={likedProfile}><img src={like} alt="Ícone de dar like"/></button>
        </LikeContainer>
    );
}
  export default HomePage;