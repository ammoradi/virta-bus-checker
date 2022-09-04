import React from 'react';

import {Logo} from 'components/Logo';
import {Clock} from 'components/Clock';
import {StopTimes} from 'containers/StopTimes';

import {useStopTimesQuery} from './App.graphql.generated';
import {
  StyledAppContainer,
  StyledLogoColumn,
  StyledStopTimesColumn,
  StyledClockColumn
} from './App.styled';

function AppContainer() {
  const {data} = useStopTimesQuery({
    fetchPolicy: 'cache-and-network',
    pollInterval: 60000,
  });

  return (
    <StyledAppContainer>
      <StyledLogoColumn>
        <Logo />
      </StyledLogoColumn>
      <StyledStopTimesColumn>
        <StopTimes data={data} />
      </StyledStopTimesColumn>
      <StyledClockColumn>
        <Clock realtime />
      </StyledClockColumn>
    </StyledAppContainer>
  );
}

export default AppContainer;