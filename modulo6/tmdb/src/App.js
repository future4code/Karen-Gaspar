import React from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <HomePage/>
    </div>
    // <BrowserRouter>
    //   <Router />
    // </BrowserRouter>
  )
}

export default App;
