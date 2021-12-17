import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CommentCardContainer, CommentCardContent } from './styled';
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'


const CommentCard = (props) => {
  
    const {username, body, voteSum, onClickVote} = props

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
      <IconButton>
          <ArrowUpwardOutlinedIcon onClick={onClickVote}/>
        </IconButton>
        {voteSum}
        <IconButton>
          <ArrowDownwardOutlinedIcon/>
        </IconButton>
      </CardActions>
    </CommentCardContainer>
  );
}

export default CommentCard