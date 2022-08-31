import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

body{
    background-color: ${({ theme }) => theme.color.background};
    font-family: 'Roboto', sans-serif,
   

}
`;

export default GlobalStyles;
