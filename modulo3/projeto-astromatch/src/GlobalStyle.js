import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

*{
    margin: 0;
    padding: 0;
}
body{
    background-image: url("https://image.freepik.com/vetores-gratis/fundo-aquarela-onirico-azul-e-rosa_125540-337.jpg");
    background-size: cover;
    height: 50vh;
    width: 100vw;
    font-family: 'Lobster'
}`

export default GlobalStyle;