import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


export const PostCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 10px auto;
`

export const PostCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
`