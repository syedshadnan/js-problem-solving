// 🟢 Problem 2 — Sort Numbers Descending

const sortDescending = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number=> !Number.isFinite(number))){
        return 'Invalid'
    }
    return [...numbers].sort((a,b)=> b - a);
}

console.log(sortDescending([5, 1, 10, 3]))