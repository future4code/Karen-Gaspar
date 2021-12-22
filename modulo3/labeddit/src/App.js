import React, { useState } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./constants/theme"
import Router from "./routes/Router"
import Header from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"

const App = () => {

  const token = localStorage.getItem("token")
  const [rigthButton, setRigthButton] = useState(token ? "Sair" : "Entrar")

  return (

    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header rigthButton={rigthButton} setRigthButton={setRigthButton}/>
        <Router setRigthButton={setRigthButton}/>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
