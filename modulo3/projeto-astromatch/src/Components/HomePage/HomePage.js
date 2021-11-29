import {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios'
import ProfilesCard from './ProfilesCard';
import Header from './Header';
import like from './img/like.png'
import dislike from './img/dislike.png'

const HomeBody = styled.body`
background-color: white;
border: 1px solid black;
margin: 0;
padding: 0;
width: 33vw;
margin: 0 auto;
`

const LikeContainer = styled.div`
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 28vw;
height: 8vh;
margin: 10px auto;
img{
    width: 3.5vw;
}`

function HomePage() {
    return (
      <HomeBody>
        <Header/>
        <ProfilesCard/>
        <LikeContainer>
        <img src={dislike}/>
        <img src={like}/>
        </LikeContainer>
      </HomeBody>
    );
  }
  
  export default HomePage;