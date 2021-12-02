import {useState, useEffect} from 'react'
import styled from 'styled-components';
import profiles from './profiles.png'

const HeaderContainer = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
padding: 0 20px;
width: 20vw;
margin: 10px auto;
img{
  width: 3vw;
}
`
const Botao = styled.button`
border: none;
border-radius: 20px;
width: 3vw;
cursor: pointer;
`

function MatchesHeader(props) {
    return (
      <HeaderContainer>
        <h3>Astromatch</h3>
        <Botao onClick={props.changePage}><img src={profiles}/></Botao>
      </HeaderContainer>
    );
  }
  
  export default MatchesHeader;