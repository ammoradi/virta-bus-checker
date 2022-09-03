import React from 'react'
import {useStopTimesQuery} from './App.graphql.generated'

import {StyledAppContainer} from './App.styled'

function AppContainer() {
  const {data} = useStopTimesQuery({ fetchPolicy: 'cache-and-network' })

  console.log(data)

  return (
    <StyledAppContainer>
      Main
    </StyledAppContainer>
  )
}

export default AppContainer