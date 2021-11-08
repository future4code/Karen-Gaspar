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

export default function Etapa1() {
  return (
    <div>
      <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
      <Lista>
        <p>1. Qual o seu nome?</p>
        <input />
        <p>2. Qual sua idade?</p>
        <input />
        <p>3. Qual seu e-mail?</p>
        <input />
        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option>Ensino Médio incompleto</option>
          <option>Ensino Médio completo</option>
          <option>Ensino Superior incompleto</option>
          <option>Ensino Superior completo</option>
        </select>
      </Lista>
    </div>
  );
}
