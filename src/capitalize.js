function capitalize(word) {
  if (word.length === 0) {
    return "";
  }

  if (typeof word != "string") {
    throw new Error("Expected string as input");
  }

  const isLetter = (letter) => letter.toLowerCase() != letter.toUpperCase();

  const firstLetterIndex = word.split("").findIndex(isLetter);

  return (
    word.substring(0, firstLetterIndex) +
    word[firstLetterIndex].toUpperCase() +
    word.substring(firstLetterIndex + 1)
  );
}

export { capitalize };
