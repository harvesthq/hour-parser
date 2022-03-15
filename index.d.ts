/**
 * Convert timestamp to decimal format
 * @param {number|string} input? Timestamp to convert
 * @returns {string} A timestamp in decimal format (rounded/padded to 2 decimals places)
 */
export declare const toDecimal: (input?: string | number | undefined) => string;
/** Convert timestamp to hh:mm format
 * @param {number|string} input? Timestamp to convert
 * @returns {string} A timestamp in hh:mm format
 */
export declare const toHHMM: (input?: string | number | undefined) => string;
