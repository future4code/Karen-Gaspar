import {useState} from 'react'
import axios from 'axios'
import Header from '../HomePage/Header';
import styled from 'styled-components';

const ListBody = styled.body`
background-color: white;
border: 1px solid black;
margin: 0;
padding: 0;
width: 33vw;
margin: 0 auto;
`

const ListContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 28vw;
height: 78vh;
margin: 10px auto;
`

function MatchList() {
    return (
      <ListBody>
        <Header/>
        <ListContainer>
        <p>My Matches</p>
        </ListContainer>
      </ListBody>
    );
  }
  
  export default MatchList;
  