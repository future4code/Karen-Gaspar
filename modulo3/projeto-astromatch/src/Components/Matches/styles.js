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
height: 60vh;
margin: 0px auto;
border: 1px solid #02afcc;;
`
export const MatchContainer = styled.div`
display: flex;
align-items: center;
width: 22.5vw;
height: 7vh;
margin: 5px;
color: black;
img{
  width: 4vw;
  height: 7vh;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
}`

export const HeaderContainer = styled.div`
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
export const Botao = styled.button`
background-color: transparent;
border: none;
border-radius: 20px;
width: 3vw;
cursor: pointer;
`

export const FooterContainer = styled.div`
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
img{
  width: 3vw;
}
`