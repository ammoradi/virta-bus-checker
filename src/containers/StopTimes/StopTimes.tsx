import React from 'react';

import {StopTimesQuery} from 'containers/App';

import StopTimesList from './StopTimesList'
import {
  StyledStopTimes,
  StyledSlug,
  StyledDataWrapper,
  StyledTitle
} from './StopTimes.styled';

export const StopTimesSlug = 'Buses arriving to';
export const StopTimesTestId = 'StopTimes';

type StopTimesProps = {
  data?: StopTimesQuery
};

function StopTimes ({ data }: StopTimesProps) {
  return (
    <StyledStopTimes data-testid={StopTimesTestId}>
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
};

export default StopTimes;