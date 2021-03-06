import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`
export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
margin: 30px auto;
height: 100px;
@media screen and (max-device-width : 480px){
width: 85vw;
margin-left: 25px;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80vw;
max-width: 350px;
margin-bottom: 20px;
`