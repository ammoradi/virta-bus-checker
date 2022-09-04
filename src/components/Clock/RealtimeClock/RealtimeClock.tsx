import React, {useContext, useState} from 'react';
import useInterval from '@use-it/interval';

import {formatHHmm} from 'utils/time';
import {StoreContext} from 'store';

import {StyledRealtimeClock} from './RealtimeClock.styled';

export const RealtimeClockTestId = 'RealtimeClock';

export function RealtimeClock(): JSX.Element {
  const {setBaseTime} = useContext(StoreContext);
  const getCurrentDate = () => new Date();
  const [date, setDate] = useState<Date>(getCurrentDate());

  const formattedDate = formatHHmm(date);

  useInterval(() => {
    const newDate = getCurrentDate();
    const newFormattedDate = formatHHmm(newDate);

    if (newFormattedDate !== formattedDate) {
      setDate(newDate);
      setBaseTime(newDate.getTime());
    }
  }, 200);

  return (
    <StyledRealtimeClock data-testid={RealtimeClockTestId}>
      {formattedDate}
    </StyledRealtimeClock>
  );
}

