import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithApolloAndThemeProvider } from 'utils/testUtils';
import { StopTimesTestId } from 'containers/StopTimes'
import { LogoTestId } from 'components/Logo';
import { RealtimeClockTestId } from 'components/Clock';

import App from './App';

describe('<App /> container', () => {
  it('should render <Logo />', () => {
    renderWithApolloAndThemeProvider(<App />);

    expect(screen.getByTestId(LogoTestId)).toBeInTheDocument()
  })

  it('should render <StopTimes />', () => {
    renderWithApolloAndThemeProvider(<App />);

    expect(screen.getByTestId(StopTimesTestId)).toBeInTheDocument()
  })

  it('should render <Clock />', () => {
    renderWithApolloAndThemeProvider(<App />);

    expect(screen.getByTestId(RealtimeClockTestId)).toBeInTheDocument()
  })
})