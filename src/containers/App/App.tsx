import React from 'react'
import {useStopTimesQuery} from './App.graphql.generated'

function AppContainer() {
  const {data} = useStopTimesQuery({ fetchPolicy: 'cache-and-network' })

  console.log(data)

  return <>Main</>
}

export default AppContainer