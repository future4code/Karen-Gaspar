import React from "react";
import styled from "styled-components";

const Titulo = styled.h3`
  font-family: sans-serif;
  text-align: center;
`;

const Lista = styled.p`
  font-family: sans-serif;
  text-align: center;
`;

export default function Etapa2() {
  return (
    <div>
      <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
      <Lista>
        <p>5. Qual curso?</p>
        <input />
        <p>6.Qual unidade de ensino?</p>
        <input />
      </Lista>
    </div>
  );
}
