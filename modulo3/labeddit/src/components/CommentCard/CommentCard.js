import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { CommentCardContainer, CommentCardContent, CommentCardFooter, CommentCardHeader, IconButtons } from './styled';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'


const CommentCard = (props) => {

  const { id, username, body, voteSum, userVote, onClickVote, onClickDeleteVote } = props

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
          {userVote === 1 ?
            <IconButtons onClick={onClickDeleteVote}>
              <ArrowUpwardOutlinedIcon color={userVote === 1 ? "primary" : "inherit"} />
            </IconButtons> :
            <IconButtons onClick={() => onClickVote(id, 1)}>
              <ArrowUpwardOutlinedIcon color={userVote === 1 ? "primary" : "inherit"} />
            </IconButtons>
          }
          <div>
            {voteSum > 0 ? voteSum : 0}
          </div>
          {userVote === - 1 ?
            <IconButtons onClick={onClickDeleteVote}>
              <ArrowDownwardOutlinedIcon color={userVote === - 1 ? "primary" : "inherit"} />
            </IconButtons> :
            <IconButtons onClick={() => onClickVote(id, -1)}>
              <ArrowDownwardOutlinedIcon color={userVote === - 1 ? "primary" : "inherit"} />
            </IconButtons>
          }
        </CardActions>
      </CommentCardFooter>
    </CommentCardContainer>
  );
}

export default CommentCard