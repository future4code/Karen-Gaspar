import React from "react";
import axios from "axios";
import PlaylistsCreation from "./Components.js/PlaylistsCreation";
import PlaylistsLibrary from "./Components.js/PlaylistsLibrary";
import PlaylistsInfo from "./Components.js/PlaylistsInfo";

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
      <div>
        {this.changePage()}
      </div>
    );
  }

}

export default App;
