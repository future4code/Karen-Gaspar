import React from "react";
import axios from "axios";

class PlaylistsInfo extends React.Component {

  

  render() {

    return (
      <div>
        <button onClick={this.props.toPlaylistsLibrary}>Voltar</button>
        <h3>Playlist Escolhida</h3>
      </div>
    );
  }

}

export default PlaylistsInfo;