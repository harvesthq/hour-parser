import * as test from 'tape'
import HourParser from '../src/index'

const {toHHMM, toDecimal} = HourParser

test('toHHMM handles undefined', (t) => {
  t.equal(toHHMM(undefined), undefined)
  t.end()
})

test('toHHMM handles 0', (t) => {
  t.equal(toHHMM(0), '0:00')
  t.end()
})

test('toHHMM parses integers', (t) => {
  t.equal(toHHMM(6), '6:00')
  t.equal(toHHMM(-6), '-6:00')
  t.end()
})

test('toHHMM parses floats', (t) => {
  t.equal(toHHMM(5.5), '5:30')
  t.equal(toHHMM(-5.5), '-5:30')
  t.equal(toHHMM(-0.5), '-0:30')
  t.end()
})

test('toHHMM handles lack of minutes', (t) => {
  t.equal(toHHMM('5:'), '5:00')
  t.equal(toHHMM('-5:'), '-5:00')
  t.end()
})

test('toHHMM handles lack of hours', (t) => {
  t.equal(toHHMM('0:100'), '1:40')
  t.end()
})

test('toHHMM handles the empty string', (t) => {
  t.equal(toHHMM(''), '')
  t.end()
})

test('toHHMM handles invalid values', (t) => {
  t.equal(toHHMM('invalid value'), '')
  t.end()
})

test('toHHMM handles decimal values', (t) => {
  t.equal(toHHMM(1.5), '1:30')
  t.equal(toHHMM('1.5'), '1:30')
  t.end()
})

test('toHHMM handles commas', (t) => {
  t.equal(toHHMM('1,5'), '1:30')
  t.end()
})

test('toHHMM handles hh:mm', (t) => {
  t.equal(toHHMM('1:30'), '1:30')
  t.end()
})

test('toHHMM handles subtraction', (t) => {
  t.equal(toHHMM('1.5-0.25'), '1:15')
  t.end()
})

test('toHHMM rounds correctly', (t) => {
  t.equal(toHHMM(0.01), '0:01')
  t.end()
})

test('toHHMM handles leading/trailing space', (t) => {
  t.equal(toHHMM('  -1:20  +1:20   '), '0:00')
  t.end()
})

test('toDecimal handles falsy values', (t) => {
  t.equal(toDecimal(undefined), undefined)
  t.equal(toDecimal(''), '')
  t.end()
})

test ('toDecimal handles 0', (t) => {
  t.equal(toDecimal(0), '0.00')
  t.end()
})

test('toDecimal handles dots and commas', (t) => {
  t.equal(toDecimal('4.32'), '4.32')
  t.equal(toDecimal('4,32'), '4.32')
  t.end()
})

test('toDecimal handles +', (t) => {
  t.equal(toDecimal('1+1'), '2.00')
  t.equal(toDecimal('1+3-1'), '3.00')
  t.end()
})

test('toDecimal handles unary -', (t) => {
  t.equal(toDecimal('-4'), '-4.00')
  t.equal(toDecimal('-1:30'), '-1.50')
  t.end()
})

test('toDecimal handles -', (t) => {
  t.equal(toDecimal('1-1'), '0.00')
  t.equal(toDecimal('4:30-5'), '-0.50')
  t.equal(toDecimal('5-4:30'), '0.50')
  t.end()
})

test('toDecimal handles :', (t) => {
  t.equal(toDecimal('1:45'), '1.75')
  t.equal(toDecimal(':45'), '0.75')
  t.equal(toDecimal(':100'), '1.67')
  t.equal(toDecimal('1:45-0:30'), '1.25')
  t.end()
})
