import styled from 'styled-components'

export const TripsListContainer=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
padding: 20px 20px 20px 35px;
height: 80vh;
`

export const Buttons =styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 16px;
`