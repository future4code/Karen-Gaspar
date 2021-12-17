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
    <PostCardContainer >
      <PostHeader>
        <Typography component="p">
          {username}
        </Typography>
        <Typography component="p">
          {title}
        </Typography>
      </PostHeader>
      <Divider />
      <PostCardContent onClick={onClickCard}>
        <Typography component="p">
          {body}
        </Typography>
      </PostCardContent>
      <Divider />
      <CardFooter>
        <CardActions>
          <IconButton onClick={onClickVote}>
            <ArrowUpwardOutlinedIcon />
          </IconButton>
          <div>
          {voteSum}
          </div>
          <IconButton >
            <ArrowDownwardOutlinedIcon />
          </IconButton>
          </CardActions>
          <Typography component="p">
            {commentCount} Comentários
          </Typography>
      </CardFooter>
    </PostCardContainer>
  );
}

export default PostCard