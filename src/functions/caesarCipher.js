function caesarCipher(str, shift) {
  const letters = "abcdefghijklmnopqrstuvwxyz"; // CORRECT ALPHABET

  return str
    .split("")
    .map((char) => {
      const isUpperCase = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();

      if (letters.includes(lowerChar)) {
        const index = letters.indexOf(lowerChar);
        const newIndex = (index + shift) % 26;
        const newChar = letters[newIndex < 0 ? 26 + newIndex : newIndex];

        return isUpperCase ? newChar.toUpperCase() : newChar;
      }

      return char;
    })
    .join("");
}

export { caesarCipher };
