import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithThemeProvider } from 'utils/testUtils';

import StopTimes, {StopTimesSlug} from './StopTimes';

describe('<StopTimes /> container', () => {
  it('should render slug', () => {
    renderWithThemeProvider(<StopTimes />)

    expect(screen.getByText(StopTimesSlug)).toBeInTheDocument()
  })
})