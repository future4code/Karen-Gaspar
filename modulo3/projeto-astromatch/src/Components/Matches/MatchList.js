import {useState, useEffect} from 'react'
import axios from 'axios'
import MatchesHeader from '../Matches/MatchesHeader';
import {ListBody, ListContainer, MatchContainer} from './styles';
import MatchesFooter from './MatchesFooter';


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

  const clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/karen/clear")
    .then((response) => {
      setMatches([])
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.data)
    })
  }

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
        <MatchesFooter clear={clear} getMatches={getMatches}/>
      </ListBody>
    );
  }
  
  export default MatchList;
  