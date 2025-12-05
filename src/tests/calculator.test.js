import { calculator } from "../functions/calculator";

describe("calculator", () => {
  // --- Addition Tests ---
  describe("Addition", () => {
    test("Basic examples", () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(-10, 8)).toBe(-2);
      expect(calculator.add(0, 1234)).toBe(1234);
    });

    test("Works for BigInt type", () => {
      expect(calculator.add(BigInt(100), BigInt(200))).toBe(BigInt(300));
    });

    describe("Edge cases", () => {
      test("Throw if parameters have different types", () => {
        expect(() => calculator.add(100, BigInt(200))).toThrow();
        expect(() => calculator.add(BigInt(100), 200)).toThrow();
      });

      test("Throw if null is passed as parameter", () => {
        expect(() => calculator.add(null, 1)).toThrow();
        expect(() => calculator.add(1, null)).toThrow();
        expect(() => calculator.add(null, null)).toThrow();
      });

      test("Throw if undefined is passed as parameter", () => {
        expect(() => calculator.add(undefined, 1)).toThrow();
        expect(() => calculator.add(1, undefined)).toThrow();
        expect(() => calculator.add(undefined, undefined)).toThrow();
      });

      test("Throw if non-number is passed as parameter", () => {
        expect(() => calculator.add("12", 1)).toThrow();
        expect(() => calculator.add(1, [])).toThrow();
        expect(() => calculator.add({ obj: 1 }, 5)).toThrow();
        expect(() => calculator.add(2, new Set())).toThrow();
      });
    });
  });

  // --- Subtraction Tests ---
  describe("Subtraction", () => {
    test("Basic examples", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(8, -10)).toBe(18);
      expect(calculator.subtract(0, 1234)).toBe(-1234);
      expect(calculator.subtract(1234, 0)).toBe(1234);
    });

    test("Works for BigInt type", () => {
      expect(calculator.subtract(BigInt(500), BigInt(200))).toBe(BigInt(300));
      expect(calculator.subtract(BigInt(100), BigInt(200))).toBe(BigInt(-100));
    });

    describe("Edge cases", () => {
      test("Throw if parameters have different types", () => {
        expect(() => calculator.subtract(100, BigInt(200))).toThrow();
        expect(() => calculator.subtract(BigInt(100), 200)).toThrow();
      });

      test("Throw if null is passed as parameter", () => {
        expect(() => calculator.subtract(null, 1)).toThrow();
        expect(() => calculator.subtract(1, null)).toThrow();
        expect(() => calculator.subtract(null, null)).toThrow();
      });

      test("Throw if undefined is passed as parameter", () => {
        expect(() => calculator.subtract(undefined, 1)).toThrow();
        expect(() => calculator.subtract(1, undefined)).toThrow();
        expect(() => calculator.subtract(undefined, undefined)).toThrow();
      });

      test("Throw if non-number is passed as parameter", () => {
        expect(() => calculator.subtract("12", 1)).toThrow();
        expect(() => calculator.subtract(1, [])).toThrow();
        expect(() => calculator.subtract({ obj: 1 }, 5)).toThrow();
        expect(() => calculator.subtract(2, new Set())).toThrow();
      });
    });
  });

  // --- Multiplication Tests ---
  describe("Multiplication", () => {
    test("Basic examples", () => {
      expect(calculator.multiply(5, 3)).toBe(15);
      expect(calculator.multiply(-4, 6)).toBe(-24);
      expect(calculator.multiply(0, 1234)).toBe(0);
      expect(calculator.multiply(1.5, 2.5)).toBeCloseTo(3.75, 6);
    });

    test("Works for BigInt type", () => {
      expect(calculator.multiply(BigInt(100), BigInt(200))).toBe(BigInt(20000));
      expect(calculator.multiply(BigInt(-5), BigInt(10))).toBe(BigInt(-50));
    });

    describe("Edge cases", () => {
      test("Throw if parameters have different types", () => {
        expect(() => calculator.multiply(100, BigInt(200))).toThrow();
        expect(() => calculator.multiply(BigInt(100), 200)).toThrow();
      });

      test("Throw if null is passed as parameter", () => {
        expect(() => calculator.multiply(null, 1)).toThrow();
        expect(() => calculator.multiply(1, null)).toThrow();
        expect(() => calculator.multiply(null, null)).toThrow();
      });

      test("Throw if undefined is passed as parameter", () => {
        expect(() => calculator.multiply(undefined, 1)).toThrow();
        expect(() => calculator.multiply(1, undefined)).toThrow();
        expect(() => calculator.multiply(undefined, undefined)).toThrow();
      });

      test("Throw if non-number is passed as parameter", () => {
        expect(() => calculator.multiply("12", 1)).toThrow();
        expect(() => calculator.multiply(1, [])).toThrow();
        expect(() => calculator.multiply({ obj: 1 }, 5)).toThrow();
        expect(() => calculator.multiply(2, new Set())).toThrow();
      });
    });
  });

  // --- Division Tests ---
  describe("Division", () => {
    test("Basic examples", () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(7, 2)).toBeCloseTo(3.5, 6);
      expect(calculator.divide(-15, 3)).toBe(-5);
      expect(calculator.divide(0, 1234)).toBe(0);
    });

    test("Works for BigInt type", () => {
      expect(calculator.divide(BigInt(20000), BigInt(200))).toBe(BigInt(100));
      expect(calculator.divide(BigInt(10), BigInt(-5))).toBe(BigInt(-2));
    });

    describe("Edge cases", () => {
      test("Throw if parameters have different types", () => {
        expect(() => calculator.divide(100, BigInt(200))).toThrow();
        expect(() => calculator.divide(BigInt(100), 200)).toThrow();
      });

      test("Throw if null is passed as parameter", () => {
        expect(() => calculator.divide(null, 1)).toThrow();
        expect(() => calculator.divide(1, null)).toThrow();
        expect(() => calculator.divide(null, null)).toThrow();
      });

      test("Throw if undefined is passed as parameter", () => {
        expect(() => calculator.divide(undefined, 1)).toThrow();
        expect(() => calculator.divide(1, undefined)).toThrow();
        expect(() => calculator.divide(undefined, undefined)).toThrow();
      });

      test("Throw if non-number is passed as parameter", () => {
        expect(() => calculator.divide("12", 1)).toThrow();
        expect(() => calculator.divide(1, [])).toThrow();
        expect(() => calculator.divide({ obj: 1 }, 5)).toThrow();
        expect(() => calculator.divide(2, new Set())).toThrow();
      });

      test("Throw if division by zero occurs", () => {
        expect(() => calculator.divide(10, 0)).toThrow();
        expect(() => calculator.divide(10n, 0n)).toThrow();
      });
    });
  });
});
