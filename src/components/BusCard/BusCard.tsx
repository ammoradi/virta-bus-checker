import React from 'react'

import {getMinutesFromSeconds} from 'utils/time'
import {Clock} from 'components/Clock'
import BusIcon from 'assets/icons/bus.svg'

import {DelayBoxTestId, ArrivalTimeTestId} from './BusCard.constants'
import {getMinuteText} from './BusCard.utils'
import {
  StyledBusCard,
  StyledDelayBox,
  StyledBusIcon,
  StyledBusName,
  StyledArrivalTime
} from './BusCard.styled';

type CardProps = {
  /** bus route name */
  name: string;
  /** bus arrival time in seconds */
  arrivalTime: number;
  /** bus delay time in seconds */
  delayTime: number;
}

function BusCard({name, arrivalTime, delayTime}: CardProps) {
  const arrivalUnixTimestamp = (new Date()).getTime() + (arrivalTime * 1000)
  const arrivalTimeInMinutes = getMinutesFromSeconds(arrivalTime)

  const isDelayed = !!delayTime;
  const delayTimeInMinutes = isDelayed ? getMinutesFromSeconds(delayTime) : 0;

  return (
    <StyledBusCard>
      <StyledDelayBox isDelayed={isDelayed} data-testid={DelayBoxTestId} />
      <StyledBusIcon src={BusIcon} alt="Bus" />
      <StyledBusName>
        {name} {isDelayed && `(${delayTimeInMinutes} ${getMinuteText(delayTimeInMinutes)} late)`}
      </StyledBusName>
      <StyledArrivalTime data-testid={ArrivalTimeTestId}>
        In {arrivalTimeInMinutes} {getMinuteText(arrivalTimeInMinutes)} /{' '}
        <Clock realtime={false} time={arrivalUnixTimestamp} />
      </StyledArrivalTime>
    </StyledBusCard>
  )
}

export default BusCard