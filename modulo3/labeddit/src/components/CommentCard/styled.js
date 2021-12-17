import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


export const CommentCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 10px auto;
  background-color: #272729;
`

export const CommentCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30px;
`