import React from "react";
import styled from "styled-components";
import PlaylistsCreation from "./Components/PlaylistsCreation";
import PlaylistsInfo from "./Components/PlaylistsInfo";
import PlaylistsLibrary from "./Components/PlaylistsLibrary";

const HomePageContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  color: #c3896e;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  text-align: center;
  margin-left: 150px;
  button {
    margin: 2px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: #6e3526;
`;

class App extends React.Component {
  state = {
    currentPage: "playlists"
  };

  changePage = () => {
    switch (this.state.currentPage) {
      case "playlists":
        return (
          <div>
            <PlaylistsCreation />
            <PlaylistsLibrary toPlaylistsInfo={this.toPlaylistsInfo} />
          </div>
        );
      case "tracks":
        return <PlaylistsInfo toPlaylistsLibrary={this.toPlaylistsLibrary} />;
      default:
        return <div>Erro! Página não encontrada!</div>;
    }
  };

  toPlaylistsLibrary = () => {
    this.setState({ currentPage: "playlists" });
  };

  toPlaylistsInfo = () => {
    this.setState({ currentPage: "tracks" });
  };

  render() {
    return (
      <HomePageContainer>
        <Title>
          <h1>Labefy</h1>
        </Title>
        <MainContainer>{this.changePage()}</MainContainer>
      </HomePageContainer>
    );
  }
}

export default App;
