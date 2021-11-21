import React from "react";
import axios from "axios";
import styled from "styled-components";

const PlaylistSaveContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
h3{
    margin-top: 0;   
}
input, button{
    opacity: 0.7;
}
`

class PlaylistsCreation extends React.Component {
    state = {
        playlistName: ""
    };

    handleInputName = (event) => {
        this.setState({ playlistName: event.target.value })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistName
        };

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body, {
                headers: {
                    Authorization: "karen-gaspar-carver"
                }
            }
            )
            .then((response)=>{
                this.setState({playlistName:""})
                console.log(response)
                alert("Playlist criada com sucesso!")
            })
            .catch((error)=>{
                alert("Ops, algo deu errado. Tente novamente")
            });
    };


    render() {
        return (
            <PlaylistSaveContainer>
                <h3>Crie sua playlist</h3>
                <input
                    placeholder="Nome da playlist"
                    value={this.state.playlistName}
                    onChange={this.handleInputName} />
                <button onClick={this.createPlaylist}>Salvar</button>
            </PlaylistSaveContainer>
        );
    }

}

export default PlaylistsCreation;