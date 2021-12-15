import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {StyledToolBar} from './styled'
import { goToLoginPage, goToFeedPage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import logo from '../../assets/alien.png'

const Header = ({rigthButton, setRigthButton}) => {
  
  const history = useHistory()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () =>{
    if (token) {
    logout()
    setRigthButton("Login")
    goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToFeedPage(history)}><img src={logo} alt="alien"/> LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rigthButton}</Button>
        </StyledToolBar>
      </AppBar>
  );
}
export default Header