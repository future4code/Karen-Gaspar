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
export default function Etapa3() {
  return (
    <div>
      <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
      <Lista>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input />
        <p>8. Você fez algum curso complementar?</p>
        <select>
          <option>Nenhum</option>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
        </select>
      </Lista>
    </div>
  );
}
