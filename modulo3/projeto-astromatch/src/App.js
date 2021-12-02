import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import MatchList from './Components/Matches/MatchList';
import GlobalStyle from './GlobalStyle'
import ProfilesCard from './Components/HomePage/ProfilesCard';

const AppBody = styled.div`
margin: 60px auto;
`
function App() {

  const [currentPage, setCurrentPage] = useState(true)
  const [profilesToClear, setProfilesToClear] = useState([])

  const clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/clear")
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.data)
    })
  }
    useEffect(()=> {
    clear()
  }, [])

  const changePage = () => {
    setCurrentPage(!currentPage)
  }

  const clearProfiles = () => {
    setProfilesToClear(profilesToClear)
  }

  return (
    <AppBody>
    <GlobalStyle/>
    {currentPage ? <ProfilesCard changePage={changePage}/> : <MatchList changePage={changePage}/>}
    <button onClick={clear}>Limpar</button>
    </AppBody>
  );
}

export default App;
