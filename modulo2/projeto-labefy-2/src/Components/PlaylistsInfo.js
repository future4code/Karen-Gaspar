import React from "react";
import axios from "axios";
import styled from "styled-components";


const AddTrackContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
h3{
    margin-top: 5;   
}
input, button{
    opacity: 0.7;
}`

const Tracks = styled.h3`
margin-top: 100px;`

class PlaylistsInfo extends React.Component {

  state = {
    tracks: [],
    musicTitle: "",
    artistName: "",
    urlLink: "",
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
        <p>{track.name}</p>
        <p>{track.artist}</p>
        <p>{track.url}</p>
      </div>
    })

    return (
      <AddTrackContainer>
        <button onClick={this.props.toPlaylistsLibrary}>Voltar</button>
        <h3>Nome da playlist</h3>
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
        <Tracks>Músicas</Tracks>
        <div>{playlistTracks}</div>
      </AddTrackContainer>
    );
  }
}

export default PlaylistsInfo;