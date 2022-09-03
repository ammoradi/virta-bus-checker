import React from 'react'

import { Header } from 'components/Header'

import {useStopTimesQuery} from './App.graphql.generated'
import {StyledAppContainer} from './App.styled'

function AppContainer() {
  const {data} = useStopTimesQuery({ fetchPolicy: 'cache-and-network' })

  console.log(data)

  return (
    <StyledAppContainer>
      <Header />
    </StyledAppContainer>
  )
}

export default AppContainer