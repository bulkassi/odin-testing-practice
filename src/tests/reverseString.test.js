import { reverseString } from "../functions/reverseString";

describe("reverseString", () => {
  describe.each([
    ["hello", "olleh"],
    ["world", "dlrow"],
  ])("Regular string", (input, expected) => {
    test(`${input}`, () => {
      expect(reverseString(input)).toBe(expected);
    });
  });

  describe.each([
    ["a", "a"],
    ["z", "z"],
  ])("Single character strings", (input, expected) => {
    test(`${input}`, () => {
      expect(reverseString(input)).toBe(expected);
    });
  });

  test("Empty string", () => {
    expect(reverseString("")).toBe("");
  });

  describe.each([
    ["hello world!", "!dlrow olleh"],
    ["123! @#", "#@ !321"],
    ["a b c", "c b a"],
  ])("Multiple word strings", (input, expected) => {
    test(`${input}`, () => {
      expect(reverseString(input)).toBe(expected);
    });
  });

  test("Throw error for null", () => {
    expect(() => reverseString(null)).toThrow();
  });

  test("Throw error for undefined", () => {
    expect(() => reverseString(undefined)).toThrow();
  });

  describe.each([[123], [{}], [true]])(
    "Throw error for an input that is not a string",
    (input) => {
      test(`Throws for ${typeof input}`, () => {
        expect(() => reverseString(input)).toThrow();
      });
    },
  );
});
