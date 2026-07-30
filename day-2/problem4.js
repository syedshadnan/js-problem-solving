// Problem 4 — Count Positive Numbers

function countPositiveNumbers(numbers){
    if (!Array.isArray(numbers)){
        return "Invalid"
    }
    let positiveNumberCount = 0;

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > 0){
            positiveNumberCount++
        }
    }
    return positiveNumberCount;
}

console.log(countPositiveNumbers([-5, 8, 0, 12, -3, 20]))