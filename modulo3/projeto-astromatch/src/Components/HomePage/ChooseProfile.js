import {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios'
import like from './img/like.png'
import dislike from './img/dislike.png'


const LikeContainer = styled.div`
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 25vw;
height: 8vh;
margin: 10px auto;
img{
    width: 3vw;
}
button{
  border: none;
  border-radius: 20px;
  cursor: pointer;
}`

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