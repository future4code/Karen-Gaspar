import {useState, useEffect} from 'react'
import styled from 'styled-components';
import matches from '../HomePage/img/relationship.png'

const HeaderContainer = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 25vw;
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
:hover{
  
}`

function HomeHeader(props) {
    return (
      <HeaderContainer>
        <h3>Astromatch</h3>
        <Botao><img src={matches}/></Botao>
      </HeaderContainer>
    );
  }
  
  export default HomeHeader;