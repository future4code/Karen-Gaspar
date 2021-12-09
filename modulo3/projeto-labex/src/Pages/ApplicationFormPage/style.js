import styled from "styled-components";

export const ApplicationBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
`

export const FormContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
border: 1px solid black;
width: 300px;
height: 300px;
background-color: #D09251;
div{
    margin: 5px;
    display: flex;
    justify-content: space-around;
    width: 300px;
}
`