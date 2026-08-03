// 🔴 Problem 5 ⭐ Daily Challenge

function firstUniqueCharacter(text) {
  if (typeof text !== "string") {
    return "Invalid";
  }
  let countMap = {};

  for (const char of text) {
    if (countMap[char]) {
      countMap[char] += 1;
    } else {
      countMap[char] = 1;
    }
  }

  for (const char of text) {
    if (countMap[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstUniqueCharacter("aabbcdd"));
