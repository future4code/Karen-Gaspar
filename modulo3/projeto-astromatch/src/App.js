import {useState, useEffect} from 'react'
import HomePage from './Components/HomePage/HomePage';
import styled from 'styled-components';
import MatchList from './Components/Matches/MatchList';
import GlobalStyle from './Components/GlobalStyle'

const AppBody = styled.div`
margin: 50px;
padding: 0;
`

function App(props) {

  // const [currentPage, setCurrentPage] = useState('')

  // const toMatchesPage = (props) => {
  //   setCurrentPage('matches')
  // };
  // const toProfilesPage = (props) => {
  //   setCurrentPage('profiles')
  // };

  // const changePage = (props) => {
  //   switch (currentPage){
  //     case 'profiles':
  //       return <HomePage toMatchesPage={toMatchesPage}/>
  //     case 'matches':
  //       return <MatchList toProfilesPage={toProfilesPage}/>
  //   }
  // }

  return (
    <AppBody>
    <GlobalStyle/>
      {/* {changePage()} */}
      <HomePage />
      <MatchList/>
    </AppBody>
  );
}

export default App;
