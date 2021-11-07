import React from "react";
// import Chat from "./componentes/Chat";
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 25%;
  height: 100vh;
  border: 1px solid black;
`;
const EnvioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1px 0;
`;
const InputNome = styled.input`
  width: 20%;
`;
const InputMensagem = styled.input`
  width: 80%;
`;
const ChatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  margin: 5px;
`;

class App extends React.Component {
  state = {
    chats: [{ nome: "", mensagem: "" }],

    valorInputNome: "",
    valorInputMensagem: ""
  };

  gravaNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  gravaMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome + ":",
      mensagem: this.state.valorInputMensagem
    };
    const novoChat = [...this.state.chats, novaMensagem];

    this.setState({ chats: novoChat });
    this.setState({ valorInputNome: "", valorInputMensagem: "" });
  };

  render() {
    const conversas = this.state.chats.map((chat) => {
      return <ChatContainer>
        {chat.nome}  {chat.mensagem}
      </ChatContainer>;
    });

    return (
      <MainContainer>
        {conversas}
        <EnvioContainer>
          <InputNome
            value={this.state.valorInputNome}
            onChange={this.gravaNome}
            placeholder={"Nome"}
          />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.gravaMensagem}
            placeholder={"Sua mensagem"}
          />
          <button onClick={this.adicionaMensagem}>Enviar</button>
        </EnvioContainer>
      </MainContainer>
    );
  }
}

export default App;
