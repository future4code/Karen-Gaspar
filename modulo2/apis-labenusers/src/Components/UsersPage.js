import React from "react";
import axios from "axios";
import styled from "styled-components"

const UsersContainer = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
padding: 3px;
`

const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
button{
    margin: 5px;
}`


export default class UsersPage extends React.Component {

    state={
        users: []
    }

    componentDidMount() {
        this.getUsers();
      }

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
              this.setState({users: response.data})
          })
          .catch((error) => {
              alert("Ops, algo deu errado. Tente novamente.")
          });
      };

      deleteUser = (id) => {
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
            this.getUsers()
          })
          .catch((error) => {
            alert("Ops, algo deu errado. Tente novamente.")
          });
      };
    
    render(){
        const usersList = this.state.users.map((user)=>{
            return <UsersContainer key={user.id}>{user.name}<button onClick={() => this.deleteUser(user.id)}>Deletar</button></UsersContainer>
        })

      return (
        <ListContainer>
            <button onClick={this.props.toRegistrationPage}>Ir para cadastro</button>
            <h2>Lista de Usuários</h2>
            {usersList}
        </ListContainer>
      )
    }
  }