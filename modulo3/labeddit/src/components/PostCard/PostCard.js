import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent } from './styled';


const PostCard = (props) => {
  
    const {username, body} = props

  return (
    <PostCardContainer>
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
        <Button size="small">Vote 1</Button>
        <Button size="small">Vote -1</Button>
        <Typography variant="body2" component="p">
        Comentários
        </Typography>
      </CardActions>
    </PostCardContainer>
  );
}

export default PostCard