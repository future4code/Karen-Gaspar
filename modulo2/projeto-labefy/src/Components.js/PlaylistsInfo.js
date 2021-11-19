import React from "react";
import axios from "axios";

class PlaylistsInfo extends React.Component {

  state = {
    musicName: "",
    artistName: "",
    urlLink: ""
  }

  handleMusicName = (event) => {
    this.setState({ musicName: event.target.value })
  }

  handleArtistName = (event) => {
    this.setState({ artistName: event.target.value })
  }

  handleUrlLink = (event) => {
    this.setState({ urlLink: event.target.value })
  }

  
  addTrackToPlaylist = () => {
    const body = {
      name: this.state.musicName,
      artist: this.state.artistName,
      url: this.urlLink
    };
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,
        body,
        {
          headers: {
            Authorization: "karen-gaspar-carver"
          }
        }
      )
      .then((response) => {
        this.setState({ musicName: "", artistName: "", urlLink: "" })
        console.log(response)
        alert("Música adicionada com sucesso!")
      })
      .catch((error) => {
        console.log(error)

      })
  }

  render() {

    return (
      <div>
        <h3>Músicas</h3>
        <input
          placeholder="Título da música"
          value={this.state.musicName}
          onChange={this.handleMusicName} />
        <input
          placeholder="Artista ou banda"
          value={this.state.artistName}
          onChange={this.handleArtistName} />
        <input
          placeholder="Link da música"
          value={this.state.urlLink}
          onChange={this.handleUrlLink} />
        <button onClick={() => this.addTrackToPlaylist(this.props.id)}>Adicionar</button>
      </div>
    );
  }

}

export default PlaylistsInfo;