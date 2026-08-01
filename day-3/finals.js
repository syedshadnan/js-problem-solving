// 🟢 Problem 1 — Count Odd Numbers
function countOdd(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid';
    }
    let count = 0;
    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number % 2 !== 0){
            count++
        }
    }
    return count;
}

// 🟢 Problem 2 — Find the Second Largest Number
function findSecondLargest(numbers) {
  if (!Array.isArray(numbers)) {
    return "Invalid";
  }
  let unique = [];
  for (const num of numbers) {
     if (!Number.isFinite(num)) {
      return "Invalid";
    }
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  if (unique.length < 2) {
    return "Invalid";
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const number of unique) {
    if (number > largest) {
      secondLargest = largest;
      largest = number;
    }
    if (number > secondLargest && number !== largest) {
      secondLargest = number;
    }
  }
  return secondLargest;
}

// 🟡 Problem 3 — Count Character
function countCharacter(text, character){
    if (typeof text !== 'string' || typeof character !== 'string' || character.length !== 1){
        return 'Invalid'
    }

    const lowerText = text.toLowerCase();
    const lowerChar = character.toLowerCase();

    let count = 0;
    for (const char of lowerText){
        if (char === lowerChar){
            count++
        }
    }
    return count;
}

// 🟡 Problem 4 — Remove Duplicates
function removeDuplicates(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    const newArr = [];

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (!newArr.includes(number)){
            newArr.push(number);
        }
    }
    return newArr;
}

// 🟡 Problem 5 — Sum of Positive Numbers
function sumPositive(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    let sum = 0;

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > 0){
            sum+=number
        }
    }
    return sum;
}

// 🟠 Problem 6 — Reverse Words
function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  const words = sentence.split(" ");
  let result = [];

  for (const word of words) {
    const reversedWord = word.split("").reverse().join("");
    result.push(reversedWord);
  }

  return result.join(" ");
}