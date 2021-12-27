import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/SvgIcon'


export const CommentCardContainer = styled(Card)`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 400px;
margin: 10px auto;
`

export const CommentCardHeader = styled.div`
display: flex;
justify-content: space-between;
width: 95%;
margin: 5px;
border-bottom: 1px solid #F5F5F5;
`

export const CommentCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const CommentCardFooter = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 95%;
border-top: 1px solid #F5F5F5;
`

export const IconButtons = styled(IconButton)`
cursor: pointer;
`

