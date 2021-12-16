import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CommentCardContainer, CommentCardContent } from './styled';


const CommentCard = (props) => {
  
    const {username, body, voteSum } = props

  return (
    <CommentCardContainer >
      <CommentCardContent>
        <Typography component="p">
        {username}
        </Typography>
        <br/>
        <Typography component="p">
        {body}
        </Typography>
      </CommentCardContent>
      <CardActions>
        <Button size="small">Yes</Button>
        {voteSum}
        <Button size="small">No</Button>
      </CardActions>
    </CommentCardContainer>
  );
}

export default CommentCard