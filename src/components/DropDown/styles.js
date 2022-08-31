import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 10.5em;
  /* margin: 0 auto; */
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.body};
  background: ${({ theme }) => theme.color.unique};
  text-align: center;
  cursor: pointer;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0.5px;
  margin-bottom: 2px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.body};
  background: ${({ theme }) => theme.color.unique};
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  :hover {
    color: azure;
  }
`;
