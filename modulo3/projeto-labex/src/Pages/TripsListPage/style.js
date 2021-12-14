import styled from 'styled-components'

export const ListMainContainer=styled.div`
display: flex;
flex-direction: column;

`

export const TripsListContainer=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
padding: 20px 20px 20px 35px;
height: 100vh;
`

export const Buttons =styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
button{
    margin: 10px;
}
`