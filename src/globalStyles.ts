import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, html, body {
    font-family: 'Epilogue', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    background-color: #272433;
  }
`;

export default GlobalStyle;
