import React from 'react'
import {LikeContainer} from './styles';
import axios from 'axios'
import like from './img/like.png'
import dislike from './img/dislike.png'


function HomePage(props) {

  const choosePerson = (profileId) => {

    const body = {
      id: `${profileId}`,
      choice: true  
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/choose-person",
    body)
    .then(response => console.log(response.data))
    .catch(error => console.log(error.data))
  }

    const onClick = () => {
      props.getProfileToChoose();
      choosePerson(props.id);
    }

    return (
        <LikeContainer>
        <button onClick={props.getProfileToChoose}><img src={dislike}/></button>
        <button onClick={onClick}><img src={like}/></button>
        </LikeContainer>
    );
}
  export default HomePage;