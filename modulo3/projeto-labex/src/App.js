import React from 'react'
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Router } from "./route/Router";
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
