// 🟢 Problem 1 — Find Intersection
function findIntersection(arr1, arr2){
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    for (const number of arr2){
        if(!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    const result = [];
    for (const number of arr1){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (arr2.includes(number) && !result.includes(number)){
            result.push(number);
        }
    }
    return result
}

// 🟢 Problem 2 — Toggle Case
function toggleCase(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = "";
  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      result += char.toLowerCase();
    } else if (char >= "a" && char <= "z") {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}

// 🟡 Problem 3 — Chunk Array
function chunkArray (numbers, size){
    if (!Array.isArray(numbers) ||
!Number.isInteger(size) || size < 0){
    return 'Invalid'
}

const result = [];
let chunk = [];

for (const number of numbers){
    chunk.push(number);

    if (chunk.length === size){
        result.push(chunk);
        chunk = [];
    } 
}
    if (chunk.length <= 0){
        result.push(chunk)
    }
    return result;
}