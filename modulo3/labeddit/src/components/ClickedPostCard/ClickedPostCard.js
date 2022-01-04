import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { ClickedCardFooter, ClickedPostCardContainer, ClickedPostCardContent, ClickedPostHeader } from './styled'
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'


const ClickedPostCard = (props) => {

  const { username, body, commentCount, voteSum } = props

  return (
    <ClickedPostCardContainer>
      <ClickedPostHeader>
        <Typography variant="body2">
          {username}
        </Typography>
      </ClickedPostHeader>
      <ClickedPostCardContent>
        <Typography variant="body2">
          {body}
        </Typography>
      </ClickedPostCardContent>
      <ClickedCardFooter>
        <CardActions>
          <IconButton>
            <ArrowUpwardOutlinedIcon />
          </IconButton>
          <div>
            {voteSum > 0 ? voteSum : 0}
          </div>
          <IconButton>
            <ArrowDownwardOutlinedIcon />
          </IconButton>
        </CardActions>
        <Typography variant="body2">
          {commentCount > 0 ? commentCount : 0} comentários
        </Typography>
      </ClickedCardFooter>
    </ClickedPostCardContainer>
  );
}

export default ClickedPostCard