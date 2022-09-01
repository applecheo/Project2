import styled from "styled-components";

export const InputStyled = styled("input")`
  display: flex;
  padding: 0.5em;
  margin: 2em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const DisplayContainerStyled = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const DisplayStyled = styled("div")`
  color: azure;
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
    font-size: 60px;
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
