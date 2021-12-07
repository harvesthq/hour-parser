// import * as test from 'tape'
// import HourParser from '../src/index'

import HourParser from './'

const { toDecimal, toHHMM } = HourParser

describe('toHHMM', () => {
  test('handles invalid values', () => {
    expect(toHHMM(undefined)).toEqual('')
    expect(toHHMM('')).toEqual('')
    expect(toHHMM('TIME IS MONEY')).toEqual('')
  })

  test('handles zero', () => {
    expect(toHHMM(0)).toEqual('0:00')
  })

  test('parses integers', () => {
    expect(toHHMM(6)).toEqual('6:00')
    expect(toHHMM(-6)).toEqual('-6:00')
  })

  test('parses floats', () => {
    expect(toHHMM(5.5)).toEqual('5:30')
    expect(toHHMM(-5.5)).toEqual('-5:30')
    expect(toHHMM(-0.3)).toEqual('-0:18')
  })

  test('handles a lack of minutes', () => {
    expect(toHHMM('5:')).toEqual('5:00')
    expect(toHHMM('-9:')).toEqual('-9:00')
  })

  test('handles a lack of hours', () => {
    expect(toHHMM('0:100')).toEqual('1:40')
  })

  test('handles decimal strings', () => {
    expect(toHHMM('1.3')).toEqual('1:18')
    expect(toHHMM('-9.75')).toEqual('-9:45')
  })

  test('handles comma separators', () => {
    expect(toHHMM('1,3')).toEqual('1:18')
  })

  test('handles hh:mm', () => {
    expect(toHHMM('3:37')).toEqual('3:37')
  })

  test('handles addition and subtraction', () => {
    expect(toHHMM('1.5-0.25')).toEqual('1:15')
    expect(toHHMM('1.5+0.25')).toEqual('1:45')
  })

  test('rounds correctly', () => {
    expect(toHHMM(0.01)).toEqual('0:01')
  })

  test('handles leading and trailing space', () => {
    expect(toHHMM('          -1:30     +  1:44    ')).toEqual('0:14')
  })
})

describe('toDecimal', () => {
  test('handles invalid values', () => {
    expect(toDecimal(undefined)).toEqual('')
    expect(toDecimal('')).toEqual('')
    expect(toDecimal('A LOT OF HOURS')).toEqual('')
  })

  test('handles zero', () => {
    expect(toDecimal(0)).toEqual('0.00')
  })

  test('handles integers', () => {
    expect(toDecimal(3)).toEqual('3.00')
    expect(toDecimal(100)).toEqual('100.00')
  })

  test('handles decimal and comma separators', () => {
    expect(toDecimal('4.32')).toEqual('4.32')
    expect(toDecimal('4,32')).toEqual('4.32')
  })

  test('handles addition and subtraction', () => {
    expect(toDecimal('1.5-0.25')).toEqual('1.25')
    expect(toDecimal('1.5+0.25')).toEqual('1.75')
  })

  test('handles negatives', () => {
    expect(toDecimal('-4')).toEqual('-4.00')
    expect(toDecimal('-1:30')).toEqual('-1.50')
  })

  test('handles hh:mm', () => {
    expect(toDecimal('1:18')).toEqual('1.30')
    expect(toDecimal(':100')).toEqual('1.67')
    expect(toDecimal('1:45-0:30')).toEqual('1.25')
  })

  test('handles a lack of hours', () => {
    expect(toDecimal('.25')).toEqual('0.25')
    expect(toDecimal('.01')).toEqual('0.01')
  })

  test('handles leading and trailing space', () => {
    expect(toDecimal('          -1.30     +  1.44    ')).toEqual('0.14')
  })
})
