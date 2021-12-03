import {HeaderContainer, Botao} from './styles'
import profiles from './img/profiles.png'


function MatchesHeader(props) {

    return (
      <HeaderContainer>
        <h2>Astromatch</h2>
        <Botao onClick={props.changePage}><img src={profiles}/></Botao>
      </HeaderContainer>
    );
  }
  
  export default MatchesHeader;