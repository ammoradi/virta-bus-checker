import 'styled-components';

import { ThemeVariables } from './variables'

type ThemeVariablesType = typeof ThemeVariables

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeVariablesType {}
}