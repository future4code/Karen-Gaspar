import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: black;
    font-family: 'Arial';
    color: white;
}
`;

export default GlobalStyle;