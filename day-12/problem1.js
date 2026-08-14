// 🟢 Problem 1 — Sum All Numbers

const sumNumbers = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number))){
        return 'Invalid'
    }
    return numbers.reduce((acc,current) => acc + current, 0)
}

console.log(sumNumbers([]))