import { twoDigit, formatHHmm } from "./time";

describe('time utils - twoDigit', () => {
  it('should return a two digit stringified number', () => {
    expect(twoDigit(20)).toBe('20')
    expect(twoDigit('20')).toBe('20')
    expect(twoDigit(2)).toBe('02')
    expect(twoDigit('2')).toBe('02')
  })
})

describe('time utils - formatHHmm', () => {
  it('should return input date time in HH:mm format', () => {
    expect(formatHHmm(new Date('2022-02-02 10:23'))).toBe('10:23');

    jest.useFakeTimers().setSystemTime(new Date('2022-02-02 22:22'));
    expect(formatHHmm(new Date())).toBe('22:22');
    jest.useRealTimers()
  })
})