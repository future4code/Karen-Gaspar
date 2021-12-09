import React from 'react'
import {HeaderContainer, Botao} from './styles'
import matches from '../img/matches.png'


function HomeHeader(props) {
    return (
      <HeaderContainer>
        <h2>Astromatch</h2>
        <Botao onClick={props.changePage}><img src={matches} alt="Ícone de trocar de tela"/></Botao>
      </HeaderContainer>
    );
  }
  
  export default HomeHeader;