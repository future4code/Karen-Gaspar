import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CommentCardContainer, CommentCardContent, CommentCardFooter, CommentCardHeader } from './styled';
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'


const CommentCard = (props) => {

  const { username, body, voteSum, onClickVote } = props

  return (
    <CommentCardContainer >
      <CommentCardHeader>
        <Typography variant="body2">
          {username}
        </Typography>
      </CommentCardHeader>
      <CommentCardContent>
        <Typography variant="body2">
          {body}
        </Typography>
      </CommentCardContent>
      <CommentCardFooter>
        <CardActions>
          <IconButton onClick={onClickVote} >
            <ArrowUpwardOutlinedIcon />
          </IconButton>
          <div>
            {voteSum > 0 ? voteSum : 0}
          </div>
          <IconButton >
            <ArrowDownwardOutlinedIcon/>
          </IconButton>
        </CardActions>
      </CommentCardFooter>
    </CommentCardContainer>
  );
}

export default CommentCard