import {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MatchList from './Components/Matches/MatchList'
import GlobalStyle from './GlobalStyle'
import ProfilesCard from './Components/HomePage/ProfilesCard'
import clearIcon from './Components/Matches/img/clear.png'

const AppBody = styled.div`
margin: 60px auto;
`

function App() {

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
