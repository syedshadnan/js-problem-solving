// 🟢 Problem 1 — Find First Negative Number

const findFirstNegative = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }

    if (!numbers.every(number => Number.isFinite(number))){
        return 'Invalid'
    }

    return numbers.find(number => number < 0) ?? null;
}

console.log(findFirstNegative([5, '10', -3, -7]));