import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { CardFooter, IconButtons, PostCardContainer, PostCardContent, PostHeader } from './styled'
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import { Divider } from '@material-ui/core'


const PostCard = (props) => {

  const { id, title, username, body, commentCount, voteSum, userVote, onClickCard, onClickVote, onClickDeleteVote } = props


  return (
    <PostCardContainer >
      <PostHeader onClick={onClickCard}>
        <Typography variant="body2">
          {username}
        </Typography>
        <Typography variant="body2" >
          {title}
        </Typography>
      </PostHeader>
      <Divider />
      <PostCardContent onClick={onClickCard} >
        <Typography variant="body2">
          {body}
        </Typography>
      </PostCardContent>
      <Divider />
      <CardFooter>
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
        <Typography variant="body2">
          {commentCount > 0 ? commentCount : 0} comentários
        </Typography>
      </CardFooter>
    </PostCardContainer>
  );
}

export default PostCard