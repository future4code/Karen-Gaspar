import {useState} from 'react'
import styled from 'styled-components';
import MatchList from './Components/Matches/MatchList';
import GlobalStyle from './Components/GlobalStyle'
import ProfilesCard from './Components/HomePage/ProfilesCard';

const AppBody = styled.div`
margin: 50px;
padding: 0;
`

function App(props) {

  const [currentPage, setCurrentPage] = useState(true)

  // const toMatchesPage = (props) => {
  //   setCurrentPage('matches')
  // };
  // const toProfilesPage = (props) => {
  //   setCurrentPage('profiles')
  // };

  const changePage = () => {
    setCurrentPage(!currentPage)
  }

  return (
    <AppBody>
    <GlobalStyle/>
    {currentPage ? <ProfilesCard changePage={changePage}/> : <MatchList changePage={changePage}/>}
    <button onClick={changePage}>trocar tela</button>
    </AppBody>
  );
}

export default App;
