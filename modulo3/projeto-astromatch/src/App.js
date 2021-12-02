import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MatchList from './Components/Matches/MatchList'
import GlobalStyle from './GlobalStyle'
import ProfilesCard from './Components/HomePage/ProfilesCard'

const AppBody = styled.div`
margin: 60px auto;
`

function App(props) {

  const [currentPage, setCurrentPage] = useState(true)

  const changePage = () => {
    setCurrentPage(!currentPage)
  }

  return (
    <AppBody>
    <GlobalStyle/>
    {currentPage ? <ProfilesCard changePage={changePage}/> : <MatchList changePage={changePage}/>}
    </AppBody>
  );
}

export default App;
