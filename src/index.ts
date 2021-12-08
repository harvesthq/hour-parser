const parseNumber = (input: number | string): number => {
  const [hours, minutes] = input
    .toString()
    .replace(/,/g, '.')
    .replace(/\s/g, '')
    .split(':')

  const sign = /^\s*-/.test(hours) ? '-' : ''

  return 60 * parseFloat(hours || '0') + parseFloat(sign + (minutes || '0'))
}

const evalInput = (input: number | string): number => {
  const adder = (sum: number, match: string) => sum + parseNumber(match)

  return input
    .toString()
    .match(/\s*[+-]?[^+-]+/g)!
    .reduce(adder, 0)
}

export default {
  /**
   * Convert timestamp to decimal format
   * @param {number|string} input? Timestamp to convert
   * @returns {string} A timestamp in decimal format (rounded/padded to 2 decimals places)
   */
  toDecimal(input?: number | string): string {
    if (!input && input !== 0) {
      return ''
    }

    if (typeof input === 'number') {
      return input.toFixed(2)
    }

    const hours = evalInput(input) / 60
    return isNaN(hours) ? '' : hours.toFixed(2).toString()
  },

  /** Convert timestamp to hh:mm format
   * @param {number|string} input? Timestamp to convert
   * @returns {string} A timestamp in hh:mm format
   */
  toHHMM(input?: number | string): string {
    if (!input && input !== 0) {
      return ''
    }

    let total = evalInput(input)
    if (isNaN(total)) {
      return ''
    }

    const sign = total < 0 ? '-' : ''
    total = Math.abs(total)
    const hours = Math.floor(total / 60)
    const minutes = Math.round(total) % 60
    const paddedMinutes = minutes.toString().padStart(2, '0')

    return `${sign}${hours}:${paddedMinutes}`
  },
}
