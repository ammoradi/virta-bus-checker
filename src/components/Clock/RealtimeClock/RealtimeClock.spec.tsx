import React from 'react';
import {screen, act} from '@testing-library/react'

import {renderWithThemeProvider} from 'utils/testUtils';

import {RealtimeClock} from './RealtimeClock';

describe('<RealtimeClock />', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-02-02 00:00'));
  })
  afterAll(() => {
    jest.useRealTimers();
  })

  it('should show the clock hours and minutes correctly initially', () => {
    renderWithThemeProvider(<RealtimeClock />);

    expect(screen.getByText('00:00')).toBeInTheDocument();
  })

  it('should update the clock minutes correctly', () => {
    const {rerender} = renderWithThemeProvider(<RealtimeClock />);
    act(() => {
      jest.advanceTimersByTime(3720000); // 2 hours and 1 minute in milliseconds!
    })
    rerender(<RealtimeClock />);

    expect(screen.queryByText('00:00')).not.toBeInTheDocument();
    expect(screen.getByText('01:02')).toBeInTheDocument();
  })
})