// import {useState, useEffect} from 'react'
import HomePage from './Components/HomePage/HomePage';
import styled from 'styled-components';
import MatchList from './Components/Matches/MatchList';
import GlobalStyle from './Components/GlobalStyle'

const AppBody = styled.div`
margin: 50px;
padding: 0;
`

function App() {

  // const [currentPage, setCurrentPage] = useState('home')

  // const changePage = () => {
  //   setCurrentPage(currentPage)
  // };

  // const choosePage = (props) => {
  //   switch (currentPage){
  //     case 'home':
  //       return <HomePage changePage={changePage}/>
  //     case 'matches':
  //       return <MatchList changePage={changePage}/>
  //   }
  // }

  return (
    <AppBody>
    <GlobalStyle/>
      {/* {choosePage()} */}
      <HomePage />
      <MatchList/>
    </AppBody>
  );
}

export default App;
