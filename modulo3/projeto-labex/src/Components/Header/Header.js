import React from 'react'
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from './styles'


export const Header = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.replace("/")
      }

    return (
        <HeaderContainer>
            <h1 onClick= {goToHomePage}>Labe<span>X</span></h1>
        </HeaderContainer>
    )
}