import React from 'react'
import { Router } from "./route/Router";
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
