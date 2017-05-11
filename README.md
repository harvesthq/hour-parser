# Harvest Hour Parser

Parse user-inputted durations or timestamps (in decimal or hh:mm format) and get nice output. Even support math! Wow!

## Usage

```javascript
import HourParser from 'harvest-hour-parser'

HourParser.toHHMM('0.5') // 0:30
HourParser.toHHMM('0:5') // 0:05
HourParser.toHHMM('1.25') // 1:15
HourParser.toHHMM('1,25') // 1:15
HourParser.toHHMM('1.5+3') // 4:30
HourParser.toHHMM('1:45+3') // 4:45

HourParser.toDecimal('0.5') // 0.50
HourParser.toDecimal('0:5') // 0.08
HourParser.toDecimal('1.25') // 1.25
HourParser.toDecimal('1,25') // 1.25
HourParser.toDecimal('1.5+3') // 4.50
HourParser.toDecimal('1:45+3') // 4.75
```

## Development

This project uses Typescript. Do not modify `index.js` or `index.d.ts` manually. Make all changes to `src/index.ts`.

Run `yarn run test` to make sure nothing broke. Run `yarn run build` to export a new build. You are using [Yarn](https://yarnpkg.com/en/), right?
