import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
}
body{
    background-image: url("https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
    background-size: contain;
    height: 90vh;
    width: 100vw;
}`

export default GlobalStyle;