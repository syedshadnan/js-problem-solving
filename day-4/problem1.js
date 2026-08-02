// 🟢 Problem 1 — Find Missing Number

function findMissing(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid';
    }
    let max = numbers[0];

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > max){
            max = number;
        }
    }
    let missing;
    for (let i = 1; i <= max; i++){
        if (!numbers.includes(i)){
            return i
        }
    }
     return 'NO MISSING NUMBER'
}



// // ✅ Normal Cases
// console.log(findMissing([1, 2, 3, 5]));           // 4
// console.log(findMissing([2, 3, 4, 5]));           // 1
// console.log(findMissing([1, 2, 4, 5]));           // 3
// console.log(findMissing([1, 3, 4, 5]));           // 2
// console.log(findMissing([1, 2, 3, 4, 6]));        // 5

// // ✅ No Missing Number
// console.log(findMissing([1, 2, 3, 4, 5]));        // "NO MISSING NUMBER"

// // ✅ Single Element
// console.log(findMissing([1]));                    // "NO MISSING NUMBER"
// console.log(findMissing([2]));                    // 1

// // ✅ Unsorted Array
// console.log(findMissing([3, 5, 1, 2]));           // 4
// console.log(findMissing([4, 1, 2, 5]));           // 3

// // ✅ Invalid Input
// console.log(findMissing([]));                     // "Invalid"
// console.log(findMissing(null));                   // "Invalid"
// console.log(findMissing(undefined));              // "Invalid"
// console.log(findMissing("12345"));                // "Invalid"

// // ✅ Invalid Elements
// console.log(findMissing([1, 2, "3", 4]));         // "Invalid"
// console.log(findMissing([1, 2, NaN, 4]));         // "Invalid"
// console.log(findMissing([1, 2, Infinity, 4]));    // "Invalid"
// console.log(findMissing([1, 2, null, 4]));        // "Invalid"


// console.log(findMissing([1, 2, 2, 4, 5]));
