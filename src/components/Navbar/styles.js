import styled from "styled-components";

export const NavbarStyled = styled("div")`
  font-weight: 500;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.unique};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    width: 180px;
  }

  button {
    align-items: center;
    appearance: none;
    border-radius: 4px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-flex;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    height: 36px;
    justify-content: center;
    letter-spacing: 0.0892857em;
    line-height: normal;
    min-width: 64px;
    outline: none;
    overflow: visible;
    padding: 0 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    will-change: transform, opacity;
    margin: 5px;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
  }

  button:disabled {
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 0, rgba(0, 0, 0, 0.14) 0 0 0 0,
      rgba(0, 0, 0, 0.12) 0 0 0 0;
    color: rgba(0, 0, 0, 0.37);
    cursor: default;
    pointer-events: none;
  }

  button:not(:disabled) {
    background-color: ${({ theme }) => theme.color.unique};
  }

  button:focus {
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
  }

  button:active {
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
    background: ${({ theme }) => theme.color.background};
  }
`;
