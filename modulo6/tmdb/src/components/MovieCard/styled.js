import styled from 'styled-components'

export const CardMainContainer = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-gap: 3px;
padding: 0 30px;
`
export const MovieCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: url(image.png);
border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 4px;
width: 156px;
height: 234px;
margin: 20px;
`
export const ImageContainer = styled.img`
object-fit: contain;
`

export const MovieTitleContainer = styled.div`
border: solid black 1px;
display: grid;
grid-template-rows: 1fr 1fr;
height: 15px;
padding: 20px;
font-size: 12px;
`