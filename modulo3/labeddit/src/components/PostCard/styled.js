import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


export const PostCardContainer = styled(Card)`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 400px;
margin: 10px auto;
`

export const PostHeader = styled.div`
display: flex;
justify-content: space-between;
width: 95%;
margin: 5px;
border-bottom: 1px solid #F5F5F5;
cursor: pointer;
`

export const PostCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const CardFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 95%;
border-top: 1px solid #F5F5F5;
`
