// https://www.sliderrevolution.com/resources/css-animated-background/ Created by beshoy ekram

import styled from "styled-components";

export const BackGroundStyled = styled("div")`
  .light {
    position: absolute;
    width: 0px;
    opacity: 0.75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  .x1 {
    -webkit-animation: floatUp 4s infinite linear;
    -moz-animation: floatUp 4s infinite linear;
    -o-animation: floatUp 4s infinite linear;
    animation: floatUp 4s infinite linear;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .x2 {
    -webkit-animation: floatUp 7s infinite linear;
    -moz-animation: floatUp 7s infinite linear;
    -o-animation: floatUp 7s infinite linear;
    animation: floatUp 7s infinite linear;
    -webkit-transform: scale(1.6);
    -moz-transform: scale(1.6);
    -o-transform: scale(1.6);
    transform: scale(1.6);
    left: 15%;
  }

  .x3 {
    -webkit-animation: floatUp 2.5s infinite linear;
    -moz-animation: floatUp 2.5s infinite linear;
    -o-animation: floatUp 2.5s infinite linear;
    animation: floatUp 2.5s infinite linear;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
    left: -15%;
  }

  .x4 {
    -webkit-animation: floatUp 4.5s infinite linear;
    -moz-animation: floatUp 4.5s infinite linear;
    -o-animation: floatUp 4.5s infinite linear;
    animation: floatUp 4.5s infinite linear;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    left: -34%;
  }

  .x5 {
    -webkit-animation: floatUp 8s infinite linear;
    -moz-animation: floatUp 8s infinite linear;
    -o-animation: floatUp 8s infinite linear;
    animation: floatUp 8s infinite linear;
    -webkit-transform: scale(2.2);
    -moz-transform: scale(2.2);
    -o-transform: scale(2.2);
    transform: scale(2.2);
    left: -57%;
  }

  .x6 {
    -webkit-animation: floatUp 3s infinite linear;
    -moz-animation: floatUp 3s infinite linear;
    -o-animation: floatUp 3s infinite linear;
    animation: floatUp 3s infinite linear;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    left: -81%;
  }

  .x7 {
    -webkit-animation: floatUp 5.3s infinite linear;
    -moz-animation: floatUp 5.3s infinite linear;
    -o-animation: floatUp 5.3s infinite linear;
    animation: floatUp 5.3s infinite linear;
    -webkit-transform: scale(3.2);
    -moz-transform: scale(3.2);
    -o-transform: scale(3.2);
    transform: scale(3.2);
    left: 37%;
  }

  .x8 {
    -webkit-animation: floatUp 4.7s infinite linear;
    -moz-animation: floatUp 4.7s infinite linear;
    -o-animation: floatUp 4.7s infinite linear;
    animation: floatUp 4.7s infinite linear;
    -webkit-transform: scale(1.7);
    -moz-transform: scale(1.7);
    -o-transform: scale(1.7);
    transform: scale(1.7);
    left: 62%;
  }

  .x9 {
    -webkit-animation: floatUp 4.1s infinite linear;
    -moz-animation: floatUp 4.1s infinite linear;
    -o-animation: floatUp 4.1s infinite linear;
    animation: floatUp 4.1s infinite linear;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    left: 85%;
  }

  @-webkit-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @-moz-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @-o-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
`;
