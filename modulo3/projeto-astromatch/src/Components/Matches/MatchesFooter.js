import React from 'react'
import {FooterContainer, Botao} from './styles'
import clearIcon from '../img/clear.png'

function MatchesFooter (props) {
    const clearMatches = () => {
        props.clear();
        props.getMatches()
      }

    return (    
    <FooterContainer>
        <h2>Your Matches!</h2>
        <Botao onClick={clearMatches}><img src={clearIcon} alt="Ícone de limpar a tela"/></Botao>
    </FooterContainer>)
}

export default MatchesFooter;