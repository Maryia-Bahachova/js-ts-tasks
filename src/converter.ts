/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  const conversions: Record<string, Record<string, (val: number) => number>> = {
    m: {
        mi: (m) => m / 1609.34
    },
    mi: {
        m: (mi) => mi * 1609.34
    },
    gr: {
        pound: (gr) => gr / 453.592
    },
    pound: {
        gr: (pound) => pound * 453.592
    },
    C: {
        K: (c) => c + 273.15
    },
    K: {
        C: (k) => k - 273.15
    }
};
if (conversions[from] && conversions[from][to]) {
  return parseFloat(conversions[from][to](value).toFixed(2));
} else {
  throw new Error("Invalid conversion units");
}
};
