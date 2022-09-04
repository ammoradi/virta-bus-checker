import React from 'react'

import {getMinutesFromSeconds} from 'utils/time'
import {Clock} from 'components/Clock'
import BusIcon from 'assets/icons/bus.svg'

import {DelayBoxTestId, ArrivalTimeTestId} from './BusCard.constants'
import {getMinuteText} from './BusCard.utils'
import {
  StyledBusCard,
  StyledBusDelayAndIcon,
  StyledDelayBox,
  StyledBusIcon,
  BusNameAndArrivalTime,
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
  const absDelayTime = Math.abs(delayTime)

  const isDelayed = !!delayTime;
  const delayTimeInMinutes = isDelayed ? getMinutesFromSeconds(absDelayTime) : 0;

  return (
    <StyledBusCard role="listitem">
      <StyledBusDelayAndIcon>
        <StyledDelayBox isDelayed={isDelayed && delayTime > 0} data-testid={DelayBoxTestId} />
        <StyledBusIcon src={BusIcon} alt="Bus" />
      </StyledBusDelayAndIcon>
      <BusNameAndArrivalTime>
        <StyledBusName>
          {name} {isDelayed && `(${delayTimeInMinutes} ${getMinuteText(delayTimeInMinutes)} ${delayTime > 0 ? 'late' : 'earlier'})`}
        </StyledBusName>
        <StyledArrivalTime data-testid={ArrivalTimeTestId}>
          In {arrivalTimeInMinutes} {getMinuteText(arrivalTimeInMinutes)} /{' '}
          <Clock realtime={false} time={arrivalUnixTimestamp} />
        </StyledArrivalTime>
      </BusNameAndArrivalTime>
    </StyledBusCard>
  )
}

export default BusCard