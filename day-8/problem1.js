// 🟢 Problem 1 — Unique Positive Numbers
function uniquePositiveNumbers(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    const uniquePositive = [];
    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > 0 && !uniquePositive.includes(number)){
            uniquePositive.push(number);
        }
    }
    return uniquePositive
}

console.log(uniquePositiveNumbers([-5, 2, 2, 7, -1, 7, 10]))
// [2, 7, 10]