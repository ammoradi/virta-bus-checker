import React from 'react'

import {formatHHmm} from 'utils/time';

import {ClockProps} from '../Clock.types';
import {StyledStaticClock} from './StaticClock.styled';

type StaticClockProps = Required<Pick<ClockProps, 'time'>>;

export const StaticClockTestId = 'StaticClock';

export function StaticClock ({time}: StaticClockProps): JSX.Element {
  const dateTime = new Date(time);

  return (
    <StyledStaticClock data-testid={StaticClockTestId}>
      {formatHHmm(dateTime)}
    </StyledStaticClock>
  );
}