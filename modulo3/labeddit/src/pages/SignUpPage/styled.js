import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;

@media screen and (max-device-width : 480px){
width: 100vw;
`

export const LogoImage = styled.img`
width: 40vw;
max-width: 200px;
margin-top: 20px;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80vw;
max-width: 350px;
margin-bottom: 20px;
`

export const SignUpContainer = styled.div`
width: 80vw;
max-width: 450px;
`