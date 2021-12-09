import { createGlobalStyle } from "styled-components";
import image from './img/Rocket-orange.jpg'
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
body{
    background-image: url(${image});
    background-size: cover;
    font-family: 'Arial';
    color: white;
}
button{
    background-color: #B86917;
    padding: 3px;
}
input, select{
    width: 280px;
    height: 20px;
    margin: 5px;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}`;

export default GlobalStyle;