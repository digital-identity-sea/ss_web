/**
 * Returns true of a string is made up of all hex characters
 * @param {string} hexVal
 */
export function isHex(hexVal) {
    let isHexVal = true;
    for (let char of hexVal) {
        let num = parseInt(char, 16);
        let isHexChar = num.toString(16) === char.toLowerCase();
        if (!isHexChar) {
            isHexVal = false;
            break;
        }
    }
    return isHexVal;
}
