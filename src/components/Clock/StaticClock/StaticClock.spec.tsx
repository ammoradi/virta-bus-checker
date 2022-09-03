import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithThemeProvider } from 'utils/testUtils';

import { StaticClock } from './StaticClock';

describe('<StaticClock />', () => {
  it('should show its timestamp time props in HH:mm format', () => {
    renderWithThemeProvider(
      <StaticClock time={(new Date('2022-02-02 12:34')).getTime()} />
    )

    expect(screen.getByText('12:34')).toBeInTheDocument()
  })
})