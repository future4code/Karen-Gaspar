import {useState, useEffect} from 'react'
import axios from 'axios'
import MatchesHeader from '../Matches/MatchesHeader';
import styled from 'styled-components';

const ListBody = styled.div`
background-color: white;
border: 1px solid black;
margin: 0;
padding: 0;
width: 33vw;
margin: 0 auto;
`

const ListContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 0 20px;
width: 28vw;
height: 78vh;
margin: 10px auto;
`

const MatchContainer = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
width: 28vw;
padding: 3px;
margin: 0px auto;
img{
  width: 4vw;
}`

function MatchList() {

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
        <MatchesHeader/>
        <ListContainer>
        {matchesList}
        </ListContainer>
      </ListBody>
    );
  }
  
  export default MatchList;
  