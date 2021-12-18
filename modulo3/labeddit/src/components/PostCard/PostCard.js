import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { CardFooter, PostCardContainer, PostCardContent, PostHeader } from './styled';
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import { Divider } from '@material-ui/core';


const PostCard = (props) => {

  const { title, username, body, commentCount, voteSum, onClickCard, onClickVote } = props


  return (
    <PostCardContainer onClick={onClickCard}>
      <PostHeader>
        <Typography variant="body2">
          {username}
        </Typography>
        <Typography variant="body2" >
          {title}
        </Typography>
      </PostHeader>
      <Divider />
      <PostCardContent >
        <Typography variant="body2">
          {body}
        </Typography>
      </PostCardContent>
      <Divider />
      <CardFooter>
        <CardActions>
          <IconButton onClick={onClickVote} >
            <ArrowUpwardOutlinedIcon />
          </IconButton>
          <div>
          {voteSum > 0 ? voteSum : 0}
          </div>
          <IconButton >
            <ArrowDownwardOutlinedIcon />
          </IconButton>
          </CardActions>
          <Typography variant="body2">
            {commentCount > 0 ? commentCount : 0} comentários
          </Typography>
      </CardFooter>
    </PostCardContainer>
  );
}

export default PostCard