import {getMinuteText} from './BusCard.utils'

describe('BusCard utils', () => {
  it('should return minutes if input is greater than 1', () => {
    expect(getMinuteText(10)).toBe('minutes')
  })

  it('should return minute if input is not greater than 1', () => {
    expect(getMinuteText(0)).toBe('minute')
    expect(getMinuteText(1)).toBe('minute')
  })
})