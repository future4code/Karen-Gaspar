import React from "react";
import axios from "axios";


class PlaylistsInfo extends React.Component {

  state = {
    tracks: [],
    musicTitle: "",
    artistName: "",
    urlLink: ""
  }

  handleMusicName = (event) => {
    this.setState({ musicTitle: event.target.value })
  }

  handleArtistName = (event) => {
    this.setState({ artistName: event.target.value })
  }

  handleUrlLink = (event) => {
    this.setState({ urlLink: event.target.value })
  }


  addTrackToPlaylist = (id) => {
    const body = {
      name: this.state.musicTitle,
      artist: this.state.artistName,
      url: this.state.urlLink
    };
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body,
        {
          headers: {
            Authorization: "karen-gaspar-carver"
          }
        }
      )
      .then((response) => {
        this.setState({ musicTitle: "", artistName: "", urlLink: "" })

        alert("Música adicionada com sucesso!")
      })
      .catch((error) => {
        console.log(id)
      })
  }

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: "karen-gaspar-carver"
        }
      }
    )
      .then((response) => {
        console.log(id)
        this.getPlaylistTracks()
      })
      .catch((error) => {
        console.log(id)
        // alert("Ops, algo deu errado. Tente novamente.")
      })
  }

  render() {

    const playlistTracks = this.state.tracks.map((track) => {
      return <div
        key={track.id}>
        {track.name}
        {track.artist}
        {track.url}
      </div>
    })

    return (
      <div>
        <button onClick={this.props.toPlaylistsLibrary}>Voltar</button>
        <h3>nome da playlist escolhida</h3>
        <input
          placeholder="Título da música"
          value={this.state.musicTitle}
          onChange={this.handleMusicName} />
        <input
          placeholder="Artista"
          value={this.state.artistName}
          onChange={this.handleArtistName} />
        <input
          placeholder="Url da música"
          value={this.state.urlLink}
          onChange={this.handleUrlLink} />
        <button onClick={this.addTrackToPlaylist}>+</button>
        {/* <button onClick={this.getPlaylistTracks}>Pegar Músicas</button> */}
        <h3>Músicas</h3>
        <div>{playlistTracks}</div>
      </div>
    );
  }
}

export default PlaylistsInfo;