const parseNumber = (input: number | string) => {
  const [hours, minutes] = input.toString().replace(/,/, '.').split(':')
  const sign = /^\s*-/.test(hours) ? '-' : ''

  return 60 * parseFloat(hours || '0') + parseFloat(sign + (minutes || '0'))
}

const evalInput = (input: number | string) => {
  const adder = (sum: number, match: string) => sum + parseNumber(match)

  return input.toString().match(/\s*[+-]?[^+-]+/g)!.reduce(adder, 0)
}

export default {
  /**
   * Convert timestamp to decimal format (rounded to 2 decimal places)
   * @param  {number|string} input? Timestamp to convert
   */
  toDecimal (input?: number | string) {
    if (!input && input !== 0) {
      return input
    }

    if (typeof(input) === 'number') {
      return input.toFixed(2)
    }

    const hours = evalInput(input) / 60
    return (isNaN(hours) ? '0.00' : hours.toFixed(2).toString())
  },

  /** Convert timestamp to hh:mm format
   * @param  {number|string} input? Timestamp to convert
   */
  toHHMM (input?: number | string) {
    if (!input && input !== 0) {
      return input
    }

    let total = evalInput(input)
    if (isNaN(total)) {
      return ''
    }

    const sign = total < 0 ? '-' : ''
    total = Math.abs(total)
    const hours = Math.floor(total / 60)
    const minutes = Math.round(total) % 60

    return `${sign}${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
  }
}
