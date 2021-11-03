import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEGN3eK1XSvnA/profile-displayphoto-shrink_200_200/0/1633209285129?e=1641427200&v=beta&t=gvGv3_Ztwo10BWsDN4Nzi28eckWt8m3V2UhILkvbe5U"
          nome="Karen Gaspar"
          descricao="Oi, eu sou a Karen. Sou estudante de Web Full-Stack na Labenu. Eu atuo há 17 anos no mercado de trabalho na área administrativa. Me encontro atualmente em processo de transição de carreira para a área da programação, onde acredito que vou colher bons frutos profissionais e pessoais."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/128/747/747314.png"
          texto="Email:"
          descricao="karen@gaspar.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1179/1179981.png"
          texto="Endereço:"
          descricao="Rua dos Devs"
        />

        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://hehcorretora.net.br/wp-content/uploads/2019/04/heh_logodesk65.png"
          nome="H&H Corretora de Seguros"
          descricao="Gestão de Dados e Fluxo de Processos"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEWH5hItJXGyA/company-logo_100_100/0/1635424988383?e=1643846400&v=beta&t=DeL7cMKLDCMwRW6ZQ0v03_yFzIrsdUi0AcxdqNqkVqY"
          nome="Sonda Supermercados S/A"
          descricao="Auxiliar de Tesouraria"
        />

        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
    </div>
  );
}

export default App;
