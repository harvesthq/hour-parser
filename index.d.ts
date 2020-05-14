declare const _default: {
    /**
     * Convert timestamp to decimal format
     * @param {number|string} input? Timestamp to convert
     * @returns {string} A timestamp in decimal format (rounded/padded to 2 decimals places)
     */
    toDecimal(input?: string | number | undefined): string | number | undefined;
    /** Convert timestamp to hh:mm format
     * @param {number|string} input? Timestamp to convert
     * @returns {string} A timestamp in hh:mm format
     */
    toHHMM(input?: string | number | undefined): string | number | undefined;
};
export default _default;
