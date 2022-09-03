import React, {useState} from 'react'
import useInterval from '@use-it/interval'

import { formatHHmm } from 'utils/time';

import {StyledRealtimeClock} from './RealtimeClock.styled'

export const RealtimeClockTestId = 'RealtimeClock'

export function RealtimeClock(): JSX.Element {
  const getCurrentClock = () => formatHHmm(new Date())
  const [clock, setClock] = useState<string>(getCurrentClock())

  useInterval(() => {
    setClock(getCurrentClock())
  }, 200)

  return (
    <StyledRealtimeClock data-testid={RealtimeClockTestId}>
      {clock}
    </StyledRealtimeClock>
  )
}

