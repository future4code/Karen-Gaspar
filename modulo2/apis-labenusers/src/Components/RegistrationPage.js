import React from "react";
import axios from "axios";
import styled from "styled-components"

const RegisterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
button{
    margin: 5px;
}
`

export default class RegistrationPage extends React.Component {

    state = {
        inputName: "",
        inputEmail: ""
      };
    
    handleInputName = (event) => {
        this.setState({ inputName: event.target.value });
      };
      handleInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
      };

      createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"  
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        };
    
        axios
          .post(
            url,
            body,
            {
              headers: {
                Authorization: "karen-gaspar-carver"
              }
            }
          )
          .then((response) => {
            console.log(response)
            this.setState({ inputName: "", inputEmail: "" });
            alert("Cadastro feito com sucesso!");
          })
          .catch((error) => {
            alert("Ops, algo deu errado. Tente novamente");
          });
      };

    render() {
        return (
            <RegisterContainer>
                <button onClick={this.props.toUsersPage}>Ir para lista de Usuários</button>
                <h2>Cadastro de Usuários</h2>
                <label>Nome:</label>
                <input value={this.state.inputName} onChange={this.handleInputName} />
                <label>E-mail:</label>
                <input value={this.state.inputEmail} onChange={this.handleInputEmail} />
                <button onClick={this.createUser}>Cadastrar</button>
            </RegisterContainer>
        )
    }
}