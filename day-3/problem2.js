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
console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 50, 60, 8, 9, 10]));
console.log(findSecondLargest([]));
console.log(findSecondLargest(["1", 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findSecondLargest([NaN, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findSecondLargest([1, undefined, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, null, 10]));
