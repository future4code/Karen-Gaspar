import React from "react";
import styled from "styled-components";
import PlaylistsCreation from "./Components/PlaylistsCreation";
import PlaylistsInfo from "./Components/PlaylistsInfo";
import PlaylistsLibrary from "./Components/PlaylistsLibrary";


const HomePageContainer = styled.div`
background-image: url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
background-size: contain;
border-left: 200px solid black;
border-right: 200px solid black;
color: #c3896e;
height: 100vh;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
height: 100vh;
`

const Title = styled.div`
text-align: center;
color: #6e3526;
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
      case "tracks":
        return <PlaylistsInfo toPlaylistsLibrary={this.toPlaylistsLibrary}/>
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  toPlaylistsLibrary = () => {
    this.setState({currentPage: "playlists"})
  }

  toPlaylistsInfo = () => {
    this.setState({currentPage: "tracks"})
  }

  render() {
    return (
      <HomePageContainer>
        <Title>
          <h1>Labefy</h1>
        </Title>
        <MainContainer>
        {this.changePage()}
        </MainContainer>
      </HomePageContainer>
    );
  }

}

export default App;