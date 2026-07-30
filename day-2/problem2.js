// Problem 2 — Find the Smallest Number

function findSmallest (numbers){
    if (!Array.isArray(numbers) || numbers.length < 1){
        return 'Invalid'
    }
    let smallest = numbers[0];

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number < smallest){
            smallest = number;
        }
    }
    return smallest
}

console.log(findSmallest([15, 8, 30, 2, 9])); // 2
console.log(findSmallest([5])); // 5
console.log(findSmallest([-5, -10, 0])); // -10
console.log(findSmallest([])); // "Invalid"
console.log(findSmallest([2, "4", 6])); // "Invalid"
console.log(findSmallest(null)); // "Invalid"