import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithApolloAndThemeProvider } from 'utils/testUtils';
import { LogoTestId } from 'components/Logo';

import App from './App';

describe('<App /> container', () => {
  it('should render <Logo />', () => {
    renderWithApolloAndThemeProvider(<App />);

    expect(screen.getByTestId(LogoTestId)).toBeInTheDocument()
  })
})