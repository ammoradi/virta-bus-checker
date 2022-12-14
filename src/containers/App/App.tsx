import React from 'react';
import useInterval from '@use-it/interval';

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
  const getQueryVariables = () => ({
    startTime: Math.floor(new Date().getTime() / 1000)
  })

  const {data, refetch} = useStopTimesQuery({
    fetchPolicy: 'cache-and-network',
    variables: getQueryVariables()
  });

  useInterval(() => {
    refetch(getQueryVariables())
  }, 20000)

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