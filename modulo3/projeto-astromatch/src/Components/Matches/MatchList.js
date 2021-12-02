import {useState, useEffect} from 'react'
import axios from 'axios'
import MatchesHeader from '../Matches/MatchesHeader';
import styled from 'styled-components';
import MatchesFooter from './MatchesFooter';

const ListBody = styled.div`
width: 30vw;
margin: 0 auto;
`

const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 20px;
width: 19.9vw;
height: 60vh;
margin: 0px auto;
border: 1px solid black;
`

const MatchContainer = styled.div`
display: flex;
align-items: center;
width: 22.5vw;
height: 7vh;
margin: 5px;
img{
  width: 4vw;
  height: 7vh;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
}`

function MatchList(props) {

  const [matches, setMatches] = useState([])

  const getMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/matches")
    .then((response) => {
      setMatches(response.data.matches)
    })
    .catch((error) => {
      console.log(error.data)
    })
  }
    useEffect(()=> {
    getMatches()
  }, [])
  
  const matchesList = matches.map((match) => {
    return <MatchContainer
        key={match.id}>
        <img src={match.photo}/>
        <h4>{match.name}</h4>
    </MatchContainer>
  })
    return (
      <ListBody>
        <MatchesHeader changePage={props.changePage}/>
        <ListContainer>
        {matchesList}
        </ListContainer>
        <MatchesFooter/>
      </ListBody>
    );
  }
  
  export default MatchList;
  