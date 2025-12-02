import { capitalize } from "../functions/capitalize";

describe.each([
  {
    string: "alphabet",
    capitalized: "Alphabet",
  },
  {
    string: "sorting",
    capitalized: "Sorting",
  },
  {
    string: "brother",
    capitalized: "Brother",
  },
])("Basic examples", ({ string, capitalized }) => {
  test(`${string}`, () => {
    expect(capitalize(string)).toBe(capitalized);
  });
});

describe.each([
  {
    string: "$ello, world!",
    capitalized: "$Ello, world!",
  },
  {
    string: "?hello, world!",
    capitalized: "?Hello, world!",
  },
  {
    string: "  hello, world!",
    capitalized: "  Hello, world!",
  },
])("Special case: first char is not a letter", ({ string, capitalized }) => {
  test(`${string}`, () => {
    expect(capitalize(string)).toBe(capitalized);
  });
});

describe("Edge cases", () => {
  test("Empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("null and undefined", () => {
    expect(() => capitalize(null)).toThrow();
    expect(() => capitalize(undefined)).toThrow();
  });

  test("Not a string", () => {
    expect(() => capitalize(0)).toThrow();
    expect(() => capitalize(["a", "b", "c"])).toThrow();
    expect(() => capitalize({})).toThrow();
  });
});
