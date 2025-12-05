import { caesarCipher } from "../functions/caesarCipher";

describe("caesarCipher", () => {
  test("Basic examples", () => {
    expect(caesarCipher("efg", 5)).toBe("jkl");
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 0)).toBe("xyz");
  });

  test("Letter wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("abc", 26)).toBe("abc");
    expect(caesarCipher("wxyz", 5)).toBe("bcde");
  });

  test("Case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("LEMoNjUicE", 1)).toBe("MFNpOkVjdF");
    expect(caesarCipher("AbCdEf", 2)).toBe("CdEfGh");
  });

  test("Non-letter characters remain unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("Test123!@#", 4)).toBe("Xiwx123!@#");
    expect(caesarCipher("a.b-c_d", 7)).toBe("h.i-j_k");
  });
});
