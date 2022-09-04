import React, {useContext} from "react";

import { StoreContext } from 'store';
import {StopTimesQuery} from 'containers/App'
import {BusCard} from 'components/BusCard'

type StopTimesListProps = {
  dataList: Pick<NonNullable<StopTimesQuery['stop']>, 'stopTimes'>['stopTimes']
}

function StopTimesList({ dataList }: StopTimesListProps) {
  const {baseTime} = useContext(StoreContext)

  return (
    <>
    {dataList?.map((stopTimeData) => (
      <BusCard
        key={String(stopTimeData?.realtimeArrival)}
        baseTime={baseTime}
        name={stopTimeData?.trip?.routeShortName || '--'}
        serviceDay={stopTimeData?.serviceDay || 0}
        arrivalTime={stopTimeData?.realtimeArrival || 0}
        delayTime={stopTimeData?.arrivalDelay || 0}
      />
    ))}
    </>
  )
}

export default StopTimesList