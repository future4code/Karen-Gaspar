import React from "react";
import axios from "axios";
import styled from "styled-components"

const PlaylistContainer = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
margin: 3px;
padding: 3px;
width: 300px;
`

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
            alert("Playlist apagada com sucesso!");
            this.getAllPlaylists()
        })
        .catch((error)=>{
            alert("Ops, algo deu errado. Tente novamente.")
        })
    }

    render() {

        const playlistList = this.state.playlists.map((playlist) => {
            return <PlaylistContainer
                key={playlist.id}>
                {playlist.name}
                <button>Visualizar</button>
                <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>

            </PlaylistContainer>
        })

        return (
            <div>
                <h3>Biblioteca de Playlists</h3> 
                {playlistList}  
            </div>
        );
    }

}

export default PlaylistsLibrary;