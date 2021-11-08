import React from "react";
import styled from "styled-components";

const Titulo = styled.h3`
  font-family: sans-serif;
  text-align: center;
`;
const Agradecimento = styled.p`
  font-family: sans-serif;
  text-align: center;
`;
export default function Etapa4() {
  return (
    <div>
      <Titulo>O FORMULÁRIO ACABOU</Titulo>
      <Agradecimento>
        Muito obrigado por participar! Entraremos em contato!
      </Agradecimento>
    </div>
  );
}
