import React, {ReactNode} from 'react';
import {Normalize} from 'styled-normalize'
import {ThemeProvider} from 'styled-components'

import {ThemeVariables} from './variables';
import {GlobalStyles} from './global.styled';

type ThemeProps = {
  children: ReactNode;
}

function Theme({children}: ThemeProps) {
  return (
    <ThemeProvider theme={ThemeVariables}>
      <Normalize />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Theme;