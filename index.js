"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseNumber = function (input) {
    var _a = input.toString().replace(/,/, '.').split(':'), hours = _a[0], minutes = _a[1];
    var sign = /^\s*-/.test(hours) ? '-' : '';
    return 60 * parseFloat(hours || '0') + parseFloat(sign + (minutes || '0'));
};
var evalInput = function (input) {
    var adder = function (sum, match) { return sum + parseNumber(match); };
    return input.toString().match(/\s*[+-]?[^+-]+/g).reduce(adder, 0);
};
exports.default = {
    /**
     * Convert timestamp to decimal format (rounded to 2 decimal places)
     * @param  {number|string} input? Timestamp to convert
     */
    toDecimal: function (input) {
        if (!input) {
            return input;
        }
        if (typeof (input) === 'number') {
            return input.toFixed(2);
        }
        var hours = evalInput(input) / 60;
        return (isNaN(hours) ? '0.00' : hours.toFixed(2).toString());
    },
    /** Convert timestamp to hh:mm format
     * @param  {number|string} input? Timestamp to convert
     */
    toHHMM: function (input) {
        if (!input) {
            return input;
        }
        var total = evalInput(input);
        if (isNaN(total)) {
            return '';
        }
        var sign = total < 0 ? '-' : '';
        total = Math.abs(total);
        var hours = Math.floor(total / 60);
        var minutes = Math.round(total) % 60;
        return "" + sign + hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
    }
};
