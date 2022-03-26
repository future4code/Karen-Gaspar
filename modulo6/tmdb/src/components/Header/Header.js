import React from 'react'
import { HeaderContainer } from './styled';
import logo from '../../assests/tmdb_icon.png'

function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
    </HeaderContainer>
  );
}

export default Header;