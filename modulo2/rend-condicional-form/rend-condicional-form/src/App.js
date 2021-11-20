import React from "react";
import styled from "styled-components";
import Etapa1 from "./Componentes/Etapa1";
import Etapa2 from "./Componentes/Etapa2";
import Etapa3 from "./Componentes/Etapa3";
import EtapaFinal from "./Componentes/EtapaFinal";

const ProximaEtapa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 7px;
  }
`;

export default class App extends React.Component {
  state = {
    etapa: 1
  };

  proximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    });
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <EtapaFinal />;
        break;
    }
  };

  render() {
    return (
      <ProximaEtapa>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima Etapa</button>
        )}
      </ProximaEtapa>
    );
  }
}

