# The Harvest Hour Parser

Parse user-provided durations or timestamps (in decimal or hh:mm format) and get nice output in your JavaScript or TypeScript project.

## Installation

In your project's directory, run:

```
npm install git+https://github.com/harvesthq/hour-parser.git#v2.1.0
```

## Usage

```javascript
import { toDecimal, toHHMM } from 'hour-parser'

toHHMM('0.5') // 0:30
toHHMM('0:5') // 0:05
toHHMM('1.25') // 1:15
toHHMM('1,25') // 1:15
toHHMM('1.5+3') // 4:30
toHHMM('1:45+3') // 4:45

toDecimal('0.5') // 0.50
toDecimal('0:5') // 0.08
toDecimal('1.25') // 1.25
toDecimal('1,25') // 1.25
toDecimal('1.5+3') // 4.50
toDecimal('1:45+3') // 4.75
```

## Development

This project uses Typescript. Do not modify `index.js` or `index.d.ts` manually. Make all changes to `src/index.ts`.

Run `npm test` to make sure nothing broke. Run `npm run build` to export a new build.

## License

[MIT](https://choosealicense.com/licenses/mit/)
