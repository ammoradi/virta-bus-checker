import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
  }

  body {
    background-color: ${({theme}) => theme.colors.lightGrey};
    font-family: ${({theme}) => theme.fonts.families.IBMPlexSans};
  }
`