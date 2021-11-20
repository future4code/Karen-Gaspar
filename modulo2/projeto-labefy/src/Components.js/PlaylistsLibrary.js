import React from "react";
import axios from "axios";
import styled from "styled-components"

const PlaylistNameContainer = styled.div`
display: flex;
justify-content: space-around;
margin-top: 3px;
padding: 3px;
width: 300px;
font-size: 20px;
button{
    opacity: 0.7;
}
`

const PlaylistsContainer = styled.div`
margin-top: 180px;`

class PlaylistsLibrary extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "karen-gaspar-carver"
                    }
                }
            )
            .then((response) => {
                this.setState({ playlists: response.data.result.list })
                this.getAllPlaylists()

            })
            .catch((error) => {
                alert("Ops, algo deu errado. Tente novamente.")

            });
    };

    deletePlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
            {
                headers: {
                    Authorization: "karen-gaspar-carver"
                }
            }
        )
        .then((response)=>{
            console.log(id)
            alert("Playlist apagada com sucesso!");
            this.getAllPlaylists()
        })
        .catch((error)=>{
            alert("Ops, algo deu errado. Tente novamente.")
        })
    }

    render() {

        const playlistList = this.state.playlists.map((playlist) => {
            return <PlaylistNameContainer
                key={playlist.id}>
                {playlist.name}
                <button onClick={this.props.toPlaylistsInfo}>Visualizar</button>
                <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
            </PlaylistNameContainer>
        })

        return (
            <PlaylistsContainer>
                <h3>Biblioteca de Playlists</h3> 
                {playlistList}   
            </PlaylistsContainer>
        );
    }

}

export default PlaylistsLibrary;