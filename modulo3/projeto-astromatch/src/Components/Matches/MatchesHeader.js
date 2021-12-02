import {useState, useEffect} from 'react'
import styled from 'styled-components'
import profiles from './profiles.png'
import clearIcon from './clear.png'

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

function MatchesHeader(props) {

    const clearMatches = () => {
      props.clear();
      props.getMatches()
    }
    return (
      <HeaderContainer>
        <h2>Astromatch</h2>
        <Botao onClick={props.changePage}><img src={profiles}/></Botao>
        <Botao onClick={clearMatches}><img src={clearIcon}/></Botao>
      </HeaderContainer>
    );
  }
  
  export default MatchesHeader;