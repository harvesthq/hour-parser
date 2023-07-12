"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHHMM = exports.toDecimal = void 0;
/**
 * Convert timestamp to decimal format
 * @param {number|string} input? Timestamp to convert
 * @returns {string} A timestamp in decimal format (rounded/padded to 2 decimals places)
 */
const toDecimal = (input) => {
    if (!input && input !== 0) {
        return '';
    }
    if (typeof input === 'number') {
        return input.toFixed(2);
    }
    const hours = evalInput(input) / 60;
    return isNaN(hours) ? '' : hours.toFixed(2).toString();
};
exports.toDecimal = toDecimal;
/** Convert timestamp to hh:mm format
 * @param {number|string} input? Timestamp to convert
 * @returns {string} A timestamp in hh:mm format
 */
const toHHMM = (input) => {
    if (!input && input !== 0) {
        return '';
    }
    let total = evalInput(input);
    if (isNaN(total)) {
        return '';
    }
    const sign = total < 0 ? '-' : '';
    total = Math.abs(total);
    const hours = Math.floor(total / 60);
    let minutes = total % 60;
    if (minutes >= 59.5 && minutes < 60) {
        minutes = Math.floor(minutes);
    }
    else {
        minutes = Math.round(minutes);
    }
    const paddedMinutes = minutes.toString().padStart(2, '0');
    return `${sign}${hours}:${paddedMinutes}`;
};
exports.toHHMM = toHHMM;
// Helpers
const parseNumber = (input) => {
    const [hours, minutes] = input
        .toString()
        .replace(/,/g, '.')
        .replace(/\s/g, '')
        .split(':');
    const sign = /^\s*-/.test(hours) ? '-' : '';
    return 60 * parseFloat(hours || '0') + parseFloat(sign + (minutes || '0'));
};
const evalInput = (input) => {
    const adder = (sum, match) => sum + parseNumber(match);
    return input
        .toString()
        .match(/\s*[+-]?[^+-]+/g)
        .reduce(adder, 0);
};
