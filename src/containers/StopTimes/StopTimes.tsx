import React from 'react'

import {StyledStopTimes, StyledSlug} from './StopTimes.styled'

export const StopTimesSlug = 'Buses arriving to'

function StopTimes () {
  return (
    <StyledStopTimes>
      <StyledSlug>
        {StopTimesSlug}
      </StyledSlug>
    </StyledStopTimes>
  )
}

export default StopTimes;