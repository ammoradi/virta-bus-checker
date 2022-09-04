import React from 'react'

import {StopTimesQuery} from 'containers/App'

import StopTimesList from './StopTimesList'
import {
  StyledStopTimes,
  StyledSlug,
  StyledDataWrapper,
  StyledTitle
} from './StopTimes.styled'

export const StopTimesSlug = 'Buses arriving to'

type StopTimesProps = {
  data?: StopTimesQuery
}

function StopTimes ({ data }: StopTimesProps) {
  return (
    <StyledStopTimes>
      <StyledSlug>
        {StopTimesSlug}
      </StyledSlug>
      <StyledDataWrapper>
        <StyledTitle>
          {data?.stop?.name}
        </StyledTitle>
        <StopTimesList dataList={data?.stop?.stopTimes || []} />
      </StyledDataWrapper>
    </StyledStopTimes>
  )
}

export default StopTimes;