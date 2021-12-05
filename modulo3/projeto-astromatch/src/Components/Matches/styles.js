import styled from "styled-components"

export const ListBody = styled.div`
width: 30vw;
margin: 0 auto;
`
export const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 20px;
width: 19.9vw;
height: 355px;
margin: 0px auto;
border: 2px solid #02afcc;
`
export const MatchContainer = styled.div`
display: flex;
align-items: center;
width: 22.5vw;
height: 7vh;
margin: 5px;
color: white;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
img{
  width: 4vw;
  height: 7vh;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
}
:hover{
  background-color: #9B3CAD;
  cursor: pointer;
}`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 2px solid #02afcc;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
padding: 0 20px;
width: 20vw;
margin: 10px auto;
img{
  width: 35px;
}
h2{
  color: #02afcc;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
`
export const Botao = styled.button`
background-color: transparent;
border: none;
border-radius: 20px;
width: 3vw;
cursor: pointer;
`

export const FooterContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border: 2px solid #02afcc;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
padding: 0 20px;
width: 20vw;
height: 8vh;
margin: 10px auto;
position: relative;
h2{
    color:#02afcc;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black
}
img{
  width: 35px;
}
`