import { analyzeArray } from "../functions/analyzeArray";

describe("analyzeArray", () => {
  test("Returns object with required properties", () => {
    const returnedObject = analyzeArray([]);

    expect(returnedObject).toHaveProperty("average");
    expect(returnedObject).toHaveProperty("max");
    expect(returnedObject).toHaveProperty("min");
    expect(returnedObject).toHaveProperty("length");
  });

  describe.each([
    [[1, 2, 3], 2, 3, 1, 3],
    [[3, 9, 7, 6], 6.25, 9, 3, 4],
    [[1, 8, 3, 4, 2, 6], 4, 8, 1, 6],
  ])(
    "Checking properties correctness",
    (
      arrayToAnalyze,
      expectedAverage,
      expectedMax,
      expectedMin,
      expectedLength,
    ) => {
      const testName = arrayToAnalyze.join(", ");

      test(`[${testName}]`, () => {
        const analysis = analyzeArray(arrayToAnalyze);

        expect(analysis.average).toBeCloseTo(expectedAverage, 10);
        expect(analysis.max).toBe(expectedMax);
        expect(analysis.min).toBe(expectedMin);
        expect(analysis.length).toBe(expectedLength);
      });
    },
  );

  test("Handles empty array", () => {
    const analysis = analyzeArray([]);
    expect(analysis.average).toBeUndefined();
    expect(analysis.max).toBeUndefined();
    expect(analysis.min).toBeUndefined();
    expect(analysis.length).toBe(0);
  });

  test("Handles single element array", () => {
    const analysis = analyzeArray([5]);
    expect(analysis.average).toBe(5);
    expect(analysis.max).toBe(5);
    expect(analysis.min).toBe(5);
    expect(analysis.length).toBe(1);
  });

  test("Throws if provided argument isn't array", () => {
    expect(() => analyzeArray(23)).toThrow();
    expect(() => analyzeArray("Hello!")).toThrow();
    expect(() => analyzeArray(new Map())).toThrow();
  });

  test("Throws if provided array argument doesn\'t contain only numbers", () => {
    expect(() => analyzeArray(["Hello!"])).toThrow();
    expect(() => analyzeArray([23, "99", 0])).toThrow();
    expect(() => analyzeArray([[1, 2, 3], 4])).toThrow();
  });
});
