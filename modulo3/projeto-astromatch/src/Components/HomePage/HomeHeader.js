import React from 'react'
import styled from 'styled-components'
import matches from '../HomePage/img/matches.png'
import clearIcon from './img/clear.png'

const HeaderContainer = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #C095f4;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
padding: 0 20px;
width: 20vw;
margin: 10px auto;
img{
  width: 3vw;
}
h2{
  color: #C095f4;
}
`
const Botao = styled.button`
border: none;
border-radius: 20px;
width: 3vw;
cursor: pointer;
`

function HomeHeader(props) {
    return (
      <HeaderContainer>
        <h2>Astromatch</h2>
        <Botao onClick={props.changePage}><img src={matches}/></Botao>
        <Botao onClick={props.clear}><img src={clearIcon}/></Botao>
      </HeaderContainer>
    );
  }
  
  export default HomeHeader;