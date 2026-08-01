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

console.log(countOdd([1,2,3,4,5,6,7,8,9,10]));
console.log(countOdd([1,'1',3,4,5,6,7,8,9,10]));
console.log(countOdd([NaN,2,3,4,5,6,7,8,9,10]));
console.log(countOdd([undefined,2,3,4,5,6,7,8,9,10]));
console.log(countOdd([Infinity,2,3,4,5,6,7,8,9,10]));
console.log(countOdd([null,2,3,4,5,6,7,8,9,10]));
