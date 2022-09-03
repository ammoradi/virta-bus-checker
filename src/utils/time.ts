/**
 * adds a 0 to the start of the input number if it has one digit
 * 
 * @param {string|number} num 
 * @returns {string} two digit number
 */
export const twoDigit = (num: number | string): string => {
  let numStr = typeof num === 'string' ? num : String(num)

  return numStr.padStart(2, '0')
}

/**
 * @param {Date} dateTime 
 * @returns {string} time in HH:mm format
 */
 export const formatHHmm = (dateTime: Date): string => {
  const hours = twoDigit(dateTime.getHours())
  const minutes = twoDigit(dateTime.getMinutes())

  return `${hours}:${minutes}`
}