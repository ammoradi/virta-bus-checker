/**
 * @param {number} minutes
 * @returns {string} minutes if input is greater than 1 else minute
 */
export const getMinuteText = (minutes: number) =>
  minutes > 1 ? 'minutes' : 'minute';