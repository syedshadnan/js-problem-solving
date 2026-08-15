// 🟢 Problem 1 — Sort Numbers Ascending

const sortAscending = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number))){
        return 'Invalid'
    }
    return [...numbers].sort((a, b)=> a - b)
}
console.log(sortAscending([5, 1, 10, 3]));