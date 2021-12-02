import React from 'react'
import styled from 'styled-components';

const Footer = styled.div`
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid #02afcc;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
padding: 0 20px;
width: 20vw;
height: 8vh;
margin: 10px auto;
position: relative;
h2{
    color:#02afcc;
}
`

function MatchesFooter () {
    return (    
    <Footer>
        <h2>Your Matches!</h2>
    </Footer>)
}

export default MatchesFooter;