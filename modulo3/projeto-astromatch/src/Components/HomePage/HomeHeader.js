import React from 'react'
import {HeaderContainer, Botao} from './styles'
import matches from '../HomePage/img/matches.png'


function HomeHeader(props) {
    return (
      <HeaderContainer>
        <h2>Astromatch</h2>
        <Botao onClick={props.changePage}><img src={matches}/></Botao>
      </HeaderContainer>
    );
  }
  
  export default HomeHeader;