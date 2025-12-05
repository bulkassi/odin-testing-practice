const calculator = (function () {
  function checkNumsValidity(num1, num2) {
    const type1 = typeof num1;
    const type2 = typeof num2;

    if (
      (type1 !== "number" && type1 !== "bigint") ||
      (type2 !== "number" && type2 !== "bigint")
    ) {
      return false;
    }

    if (type1 !== type2) {
      return false;
    }

    return true;
  }

  function add(num1, num2) {
    if (!checkNumsValidity(num1, num2)) {
      throw new Error("Numbers must be passed as input!");
    }
    return num1 + num2;
  }

  function subtract(num1, num2) {
    if (!checkNumsValidity(num1, num2)) {
      throw new Error("Numbers must be passed as input!");
    }
    return num1 - num2;
  }

  function divide(num1, num2) {
    if (!checkNumsValidity(num1, num2)) {
      throw new Error("Numbers must be passed as input!");
    }

    if (num2 === 0) {
      throw new Error("Division by 0 occured");
    }

    return num1 / num2;
  }

  function multiply(num1, num2) {
    if (!checkNumsValidity(num1, num2)) {
      throw new Error("Numbers must be passed as input!");
    }
    return num1 * num2;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

export { calculator };
