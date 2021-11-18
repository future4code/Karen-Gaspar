import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerCadastro = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 7px;
button{
  margin-top: 8px;
}
`;

export default class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
    // currentPage: { TelaDeUsuarios }
  };

  handleInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  handleInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  // changePage = (event) => {
  //   this.setState({ currentPage: event.target.value });
  // };

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "karen-gaspar-carver"
          }
        }
      )
      .then((response) => {
        this.setState({ inputNome: "", inputEmail: "" });
        alert("Cadastro feito com sucesso!");
      })
      .catch((error) => {
        alert("Ops, parece que faltou digitar o nome e e-mail para cadastro");
      });
  };

  render() {
    return (
      <ContainerCadastro>
        <div>
          <button>Ir para a lista de usuários</button>
        </div>
        <h2>Cadastro de Usuários</h2>
        <label>Nome:</label>
        <input value={this.state.inputNome} onChange={this.handleInputNome} />
        <label>E-mail:</label>
        <input value={this.state.inputEmail} onChange={this.handleInputEmail} />
        <button onClick={this.createUser}>Cadastrar</button>
      </ContainerCadastro>
    );
  }
}
