function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Provided argument is not an array!");
  }

  if (Array.isArray(arr) && arr.some((el) => typeof el !== "number")) {
    throw new Error("Provided array contains non-numbers");
  }

  if (arr.length === 0) {
    return {
      average: undefined,
      max: undefined,
      min: undefined,
      length: 0,
    };
  }

  return {
    average: arr.reduce((accum, num) => accum + num, 0) / arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
  };
}

export { analyzeArray };
