import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    font-family: ${({ theme }) => theme.fonts.families.IBMPlexSans};
  }
`