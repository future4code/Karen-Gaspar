import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Lista = styled.div``

export default class TelaDeUsuarios extends React.Component {
  state = {
    listaDeUsuarios: []
  };

  componentDidMount() {
    this.getUsers();
  }

  // deletarUsuario = (id) => {
  //   this.setState();
  // };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "karen-gaspar-carver"
          }
        }
      )
      .then((response) => {
        this.setState({ listaDeUsuarios: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  getUsersById = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "karen-gaspar-carver"
          }
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  deleteUsersById = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "karen-gaspar-carver"
          }
        }
      )
      .then((response) => {
        alert("Usuário apagado com sucesso!");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  render() {
    const novaLista = this.state.listaDeUsuarios.map((user) => (
      <li key={user.id}>
        {user.name} <button onCLick={() => (user.id)}>X</button>
      </li>
    ));

    return (
      <Lista>
        <button>Voltar</button>
        <h2>Lista de Usuários</h2>
        <ul>{novaLista}</ul>
      </Lista>
    );
  }
}
