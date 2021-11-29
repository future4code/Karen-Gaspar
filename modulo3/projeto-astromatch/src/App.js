import {useState} from 'react'
import Matches from './Components/Matches/MatchList';
import HomePage from './Components/HomePage/HomePage';
import styled from 'styled-components';
import MatchList from './Components/Matches/MatchList';

const AppBody = styled.div`
background-color: #9c393a;
margin: 0;
padding: 0;
`

function App() {

  // const [currentPage, setCurrentPage] = useState('home')

  // changePage = (props) => {
  //   setCurrentPage(currentPage)
  // }

  // choosePage = (props) => {
  //   switch (currentPage){
  //     case 'home':
  //       return <HomePage changePage={changePage}/>
  //     case 'matches':
  //       return <MatchList changePage={changePage}/>
  //   }
  // }

  return (
    <AppBody>
      {/* {choosePage()} */}
      <HomePage />
      <MatchList/>
    </AppBody>
  );
}

export default App;
