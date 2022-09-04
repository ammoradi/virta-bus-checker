import React from 'react';

import {ClockProps} from './Clock.types';
import {RealtimeClock} from './RealtimeClock';
import {StaticClock} from './StaticClock';

export function Clock({realtime, time}: ClockProps): JSX.Element {
  if (realtime) return <RealtimeClock />;

  if (!time) throw new TypeError('Cannot use a non-realtime clock without any time prop!');

  return <StaticClock time={time} />;
}