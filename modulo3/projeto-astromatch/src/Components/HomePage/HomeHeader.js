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
width: 28vw;
margin: 10px auto;
img{
  width: 3vw;
}
`

function HomeHeader(props) {
    return (
      <HeaderContainer>
        <h3>Astromatch</h3>
        <img src={matches}/>
      </HeaderContainer>
    );
  }
  
  export default HomeHeader;