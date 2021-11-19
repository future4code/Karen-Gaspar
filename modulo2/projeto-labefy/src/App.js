import React from "react";
import axios from "axios";
import styled from "styled-components"
import PlaylistsCreation from "./Components.js/PlaylistsCreation";
import PlaylistsLibrary from "./Components.js/PlaylistsLibrary";
import PlaylistsInfo from "./Components.js/PlaylistsInfo";

const HomePageContainer = styled.div`

background-color: lightskyblue;
color: lightcoral;
height: 100vh;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: flex;
justify-content: flex-start;
`
const PlaylistsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

const Title = styled.div`
border: 1px solid black;

`

class App extends React.Component {

  state = {
    currentPage: "playlists"
  }

  changePage = () => {
    switch (this.state.currentPage){
      case "playlists":
        return <div>
          <PlaylistsCreation/>
          <PlaylistsLibrary toPlaylistsInfo={this.toPlaylistsInfo}/>
          </div>
      case "music":
        return <PlaylistsInfo toPlaylistsLibrary={this.toPlaylistsLibrary}/>
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  toPlaylistsLibrary = () => {
    this.setState({currentPage: "playlists"})
  }

  toPlaylistsInfo = () => {
    this.setState({currentPage: "music"})
  }

  render() {
    return (
      <HomePageContainer>
        <Title>
          <h2>Labefy</h2>
        </Title>
        <PlaylistsContainer>
        {this.changePage()}
        </PlaylistsContainer>
      </HomePageContainer>
    );
  }

}

export default App;
