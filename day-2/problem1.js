// Problem 1 — Count Even Numbers
function countEven(numbers){
    if (!Array.isArray(numbers)){
        return "Invalid"
    }
    let count = 0;

    for (const number of numbers){
        if (typeof number !== 'number' || !Number.isFinite(number)){
            return 'Invalid'
        }
        if (number % 2 === 0){
            count++
        }
    }
    return count;
}

console.log(countEven([2, NaN, 8, 11, 14])); // 3
console.log(countEven([])); // 0
console.log(countEven([1, 3, 5])); // 0
console.log(countEven([2, 4, 6])); // 3
console.log(countEven([2, "4", 6])); // "Invalid"
console.log(countEven(null)); // "Invalid"
console.log(countEven(undefined)); // "Invalid"
console.log(countEven([2, NaN, 6])); // "Invalid"