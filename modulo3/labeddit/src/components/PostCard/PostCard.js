import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent } from './styled';


const PostCard = (props) => {
  
    const {username, body, commentCount, voteSum, onClick} = props

  return (
    <PostCardContainer onClick={onClick}>
      <PostCardContent>
        <Typography component="p">
        {username}
        </Typography>
        <br/>
        <Typography component="h4">
        {body}
        </Typography>
      </PostCardContent>
      <CardActions>
        <Button size="small">Yes</Button>
        {voteSum}
        <Button size="small">No</Button>
        <Typography component="p">
        {commentCount} Comentários
        </Typography>
      </CardActions>
    </PostCardContainer>
  );
}

export default PostCard