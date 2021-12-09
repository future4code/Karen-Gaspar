import {HeaderContainer, Botao} from './styles'
import profiles from '../img/profiles.png'


function MatchesHeader(props) {

    return (
      <HeaderContainer>
        <h2>Astromatch</h2>
        <Botao onClick={props.changePage}><img src={profiles} alt="Ícone de trocar de tela"/></Botao>
      </HeaderContainer>
    );
  }
  
  export default MatchesHeader;