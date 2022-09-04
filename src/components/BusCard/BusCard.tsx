import React from 'react'

import {getMinutesFromSeconds} from 'utils/time'
import {Clock} from 'components/Clock'
import BusIcon from 'assets/icons/bus.svg'

import {DelayBoxTestId, ArrivalTimeTestId} from './BusCard.constants'
import {getMinuteText} from './BusCard.utils'
import {
  StyledBusCard,
  StyledBusIconAndName,
  StyledDelayBox,
  StyledBusIcon,
  StyledBusName,
  StyledArrivalTime
} from './BusCard.styled';

type CardProps = {
  /** bus route name */
  name: string;
  /** now in milliseconds timestamp */
  baseTime: number;
  /** bus service date in unix timestamp format */
  serviceDay: number;
  /** bus arrival time in seconds */
  arrivalTime: number;
  /** bus delay time in seconds */
  delayTime: number;
}

function BusCard({
  name, baseTime, serviceDay, arrivalTime, delayTime
}: CardProps) {
  const serviceDayTimestamp = serviceDay * 1000
  const arrivalUnixTimestamp = serviceDayTimestamp + (arrivalTime * 1000)
  const arrivalTimeInMinutes = getMinutesFromSeconds((arrivalUnixTimestamp - baseTime) / 1000)

  const isDelayed = !!delayTime;
  const delayTimeInMinutes = isDelayed ? getMinutesFromSeconds(delayTime) : 0;

  return (
    <StyledBusCard>
      <StyledBusIconAndName>
        <StyledDelayBox isDelayed={isDelayed} data-testid={DelayBoxTestId} />
        <StyledBusIcon src={BusIcon} alt="Bus" />
        <StyledBusName>
          {name} {isDelayed && `(${delayTimeInMinutes} ${getMinuteText(delayTimeInMinutes)} late)`}
        </StyledBusName>
      </StyledBusIconAndName>
      <StyledArrivalTime data-testid={ArrivalTimeTestId}>
        In {arrivalTimeInMinutes} {getMinuteText(arrivalTimeInMinutes)} /{' '}
        <Clock realtime={false} time={arrivalUnixTimestamp} />
      </StyledArrivalTime>
    </StyledBusCard>
  )
}

export default BusCard