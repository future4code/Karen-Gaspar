import styled from "styled-components";

export const LoginPageBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
`

export const LoginContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
padding: 16px;
width: 250px;
height: 200px;
background-color: #D09251;
input, select{
    width: 200px;
    height: 20px;
}
div{
    display: flex;
    justify-content: space-around;
    width: 200px;
    padding: 0 3px;
    margin: 10px;
}
`