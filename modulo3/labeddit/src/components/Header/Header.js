import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {StyledToolBar} from './styled'
import { goToLoginPage, goToFeedPage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import logo from '../../assets/alien.png'

const Header = () => {

  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToLoginPage(history)}><img src={logo} alt="alien"/> LabEddit</Button>
          {/* <Button onClick={() => goToFeedPage(history)} color="inherit">LabEddit</Button> */}
          <Button onClick={() => goToLoginPage(history)} color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>
  );
}
export default Header