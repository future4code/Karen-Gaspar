import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolBar } from './styled'
import { goToLoginPage, goToFeedPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import logoImage from '../../assets/alien.png'
import { Typography } from '@material-ui/core'

const Header = ({ rigthButton, setRigthButton }) => {

  const history = useHistory()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRigthButton("Entrar")
      goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button color="inherit" onClick={() => goToFeedPage(history)}>
          <img src={logoImage} alt="alien" />
          <Typography variant="h5">LABEDDIT</Typography>
        </Button>
        <Button onClick={rightButtonAction} color="inherit">{rigthButton}</Button>
      </StyledToolBar>
    </AppBar>
  );
}
export default Header