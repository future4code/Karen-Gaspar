import React from 'react';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { ClickedPostCardContainer, ClickedPostCardContent } from './styled'
import IconButton from '@material-ui/core/SvgIcon'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'


const ClickedPostCard = (props) => {
  
    const {username, body, commentCount, voteSum} = props

  return (
    <ClickedPostCardContainer>
      <ClickedPostCardContent>
        <Typography component="p">
        {username}
        </Typography>
        <br/>
        <Typography component="p">
        {body}
        </Typography>
      </ClickedPostCardContent>
      <CardActions>
        <IconButton>
          <ArrowUpwardOutlinedIcon/>
        </IconButton>
        {voteSum}
        <IconButton>
          <ArrowDownwardOutlinedIcon/>
        </IconButton>
        <Typography component="p">
        {commentCount} Comentários
        </Typography>
      </CardActions>
    </ClickedPostCardContainer>
  );
}

export default ClickedPostCard