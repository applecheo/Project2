import styled from "styled-components";

export const InputAndNextInQueue = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    display: flex;
    padding: 0.5em;
    margin: 0 25px;
    color: #f5f5dc;
    background: #1f1013;
    border: none;
    border-radius: 3px;
  }
  p {
    color: #f5f5dc;
    transition: 0.5s;
    animation: queue 10s infinite;
    font-size: 15px;

    @keyframes queue {
      0% {
        transform: translateX(10px);
      }
      49% {
        transform: translateX(500px);
      }
      50% {
        transform: translateX(500px);
      }
      100% {
        transform: translateX(10px);
      }
    }
  }
`;

export const DisplayContainerStyled = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const DisplayStyled = styled("div")`
  color: #f5f5dc;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-shrink: 0;
`;

export const NameOfArtistStyled = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    font-size: 55px;
  }

  button {
    flex-shrink: 0;
    margin: 10px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 30px;
  }
`;
