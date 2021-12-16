import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent } from './styled';
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'


const PostCard = (props) => {
  
    const {username, body, commentCount, voteSum, onClickCard, onClickVote} = props


  return (
    <PostCardContainer onClick={onClickCard}>
      <PostCardContent>
        <Typography component="p">
        {username}
        </Typography>
        <br/>
        <Typography component="p">
        {body}
        </Typography>
      </PostCardContent>
      <CardActions>
      <IconButton onClick={onClickVote}>
          <ArrowUpwardOutlinedIcon/>
        </IconButton>
        {voteSum}
        <IconButton >
          <ArrowDownwardOutlinedIcon/>
        </IconButton>
        <Typography component="p">
        {commentCount} Comentários
        </Typography>
      </CardActions>
    </PostCardContainer>
  );
}

export default PostCard