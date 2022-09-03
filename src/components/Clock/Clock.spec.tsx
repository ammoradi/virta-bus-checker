import React from 'react'
import {screen} from '@testing-library/react'

import {renderWithThemeProvider} from 'utils/testUtils'

import {Clock} from './Clock'
import {RealtimeClockTestId} from './RealtimeClock'
import {StaticClockTestId} from './StaticClock'

describe('<Clock />', () => {
  it('should return <RealtimeClock /> when has realtime={true} prop', () => {
    renderWithThemeProvider(<Clock realtime />)

    expect(screen.getByTestId(RealtimeClockTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(StaticClockTestId)).not.toBeInTheDocument()
  })

  it("should throw TypeError when has realtime={false} prop and doesn't have time prop", () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => renderWithThemeProvider(<Clock realtime={false} />)).toThrow(TypeError)
    consoleErrorSpy.mockRestore();
  })

  it('should return <StaticClock /> when has realtime={false} and time props', () => {
    renderWithThemeProvider(<Clock realtime={false} time={(new Date()).getTime()} />)

    expect(screen.getByTestId(StaticClockTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(RealtimeClockTestId)).not.toBeInTheDocument()
  })
})