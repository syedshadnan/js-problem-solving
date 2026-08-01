function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  const words = sentence.split(" ");
  let result = [];
console.log(words)

  for (const word of words) {
    
    const reversedWord = word.split("").reverse().join("");
    result.push(reversedWord);
  }

  return result.join(" ");
}

console.log(reverseWords("I love JavaScript"));
