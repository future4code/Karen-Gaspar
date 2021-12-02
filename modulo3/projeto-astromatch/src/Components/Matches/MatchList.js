import {useState, useEffect} from 'react'
import axios from 'axios'
import MatchesHeader from '../Matches/MatchesHeader';
import styled from 'styled-components';

const ListBody = styled.div`
width: 30vw;
margin: 0 auto;
`

const ListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 0 20px;
width: 25vw;
height: 78vh;
margin: 10px auto;
`

const MatchContainer = styled.div`
display: flex;
align-items: center;
width: 25vw;
img{
  width: 3vw;
  border-radius: 50px;
  margin: 10px;
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
  