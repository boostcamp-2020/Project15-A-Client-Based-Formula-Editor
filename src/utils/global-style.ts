import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    height: 100%;
  }
  body {
    height: 100%;
  }
  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
