// 🟢 Problem 1 — Extract a Range

const extractRange = (numbers, start, end) => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number))){
        return 'Invalid'
    }
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start){
        return 'Invalid'
    }
    return numbers.slice(start,end);

}

console.log(extractRange([10, 20, 30, 40, 50], 1, 4));