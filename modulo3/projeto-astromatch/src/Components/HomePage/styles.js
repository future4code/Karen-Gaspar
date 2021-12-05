import styled from "styled-components";

export const LikeContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border: 2px solid #9B3CAD;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
padding: 0 20px;
width: 20vw;
height: 8vh;
margin: 10px auto;
img{
  width: 3vw;
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
}`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 2px solid #9B3CAD;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
padding: 0 20px;
width: 20vw;
margin: 10px auto;
img{
  width: 35px;
}
h2{
  color: #9B3CAD;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black
}
`
export const Botao = styled.button`
background-color: transparent;
border: none;
border-radius: 20px;
width: 3vw;
cursor: pointer;
`

export const ProfileBody = styled.div`
margin: 0 auto;

`
export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 23vw;
height: 60vh;
margin: 0 auto;
border: 2px solid #9B3CAD;
img{
  width: 100%;
  height: 100%;
}
`
export const ProfileDescription = styled.div`
position: absolute;
width: 20vw;
height: 50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: white;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
font-size: 17px;
`