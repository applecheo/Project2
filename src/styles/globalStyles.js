// https://www.sliderrevolution.com/resources/css-animated-background/ Created by beshoy ekram

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

body{

    font-family: 'Roboto', sans-serif;
   margin-right: 8px;
    height: 100vh;
    font-weight: 100;
    background: radial-gradient(#a23982,#1f1013);
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;

}
button:hover{
    animation: shake 0.5s;

  
  animation-iteration-count: 1;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

`;

export default GlobalStyles;
