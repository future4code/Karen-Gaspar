import {useState, useEffect} from 'react'
import styled from 'styled-components';


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

function MatchesHeader(props) {
    return (
      <HeaderContainer>
        <h3>Astromatch</h3>
        {/* <button onClick={() => props.toProfilesPage}><img src={}/></button> */}
      </HeaderContainer>
    );
  }
  
  export default MatchesHeader;