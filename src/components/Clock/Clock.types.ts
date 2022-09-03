export type ClockProps = {
  realtime: boolean
  /** a unix timestamp number in milliseconds. like (new Date()).getTime() */
  time?: number
}