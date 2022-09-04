import { StopTimesQuery } from './App.graphql.generated';

const nowUnix = new Date().setHours(23,59,59,999) / 1000;

export const StopMock: StopTimesQuery = {
  stop: {
    id: 'STOP_ID',
    name: 'Energia-aukio',
    stopTimes:[
      {
        realtimeArrival: 21960,
        arrivalDelay: 0,
        serviceDay: nowUnix,
        trip:{
          id: 'TRIP_ID',
          routeShortName: '15',
        },
      },
      {
        realtimeArrival: 22920,
        arrivalDelay: 120,
        serviceDay: nowUnix,
        trip:{
          id: 'TRIP_ID',
          routeShortName: '15',
        },
      },
      {
        realtimeArrival: 23880,
        arrivalDelay: 0,
        serviceDay: nowUnix,
        trip:{
          id: 'TRIP_ID',
          routeShortName: '15',
        },
      },
      {
        realtimeArrival: 24840,
        arrivalDelay: -60,
        serviceDay: nowUnix,
        trip:{
          id: 'TRIP_ID',
          routeShortName: '15',
        },
      },
      {
        realtimeArrival: 25140,
        arrivalDelay: 180,
        serviceDay: nowUnix,
        trip:{
          id: 'TRIP_ID',
          routeShortName: '15',
        },
      }
    ]
  }
};