import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithThemeProvider } from 'utils/testUtils'
import BusIcon from 'assets/icons/bus.svg'

import BusCard from './BusCard'
import {DelayBoxTestId, ArrivalTimeTestId} from './BusCard.constants'

describe('<BusCard />', () => {
  it('should render green box when bus is not delayed', () => {
    renderWithThemeProvider(<BusCard name="15" arrivalTime={2160} delayTime={0} />)

    expect(screen.getByTestId(DelayBoxTestId)).toBeInTheDocument();
  })

  it('should render bus icon', () => {
    renderWithThemeProvider(<BusCard name="15" arrivalTime={2160} delayTime={0} />)

    expect(screen.getByAltText('Bus')).toHaveAttribute('src', BusIcon)
  })

  it('should not render delay time if bus is not delayed', () => {
    renderWithThemeProvider(<BusCard name="15" arrivalTime={2160} delayTime={0} />)

    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.queryByText('15 (1 minute late)')).not.toBeInTheDocument()
  })

  it('should render delay time if bus is delayed', () => {
    renderWithThemeProvider(<BusCard name="15" arrivalTime={2160} delayTime={120} />)

    expect(screen.queryByText('15')).not.toBeInTheDocument()
    expect(screen.getByText('15 (2 minutes late)')).toBeInTheDocument()
  })

  it('should render expected arrival time', () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-02-02 00:00'))
    renderWithThemeProvider(<BusCard name="15" arrivalTime={200} delayTime={0} />)

    expect(
      screen.getByTestId(ArrivalTimeTestId).textContent
    ).toBe('In 3 minutes / 00:03')
  })
})