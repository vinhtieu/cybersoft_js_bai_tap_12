/**
 * Flatten multi-dimensional array into one-dimensional array
 * @param {array} - The array to flatten
 * @returns {array} - The flattened array
 * @throws {Error} - If the parameter is not an array
 */
const flattenArray = (array) => {
  if (!Array.isArray(array)) throw new Error("Parameter must be an array");
  return array.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? flattenArray(current) : current);
  }, []);
};

/**
 * Format a number with thousand separator
 * @param {arg} - a number to format
 * @returns {locale} - The flattened array
 * @throws {Error} - If the parameter is not a number
 */
const toCurrency = (arg, locale = "en-US", option) => {
  const value = arg * 1;
  if (typeof value !== "number")
    throw new Error("Parameter must be a number or string of numbers");
  return value.toLocaleString(locale, option);
};

export { flattenArray, toCurrency };
