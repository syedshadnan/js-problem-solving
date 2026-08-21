// 🟢 Problem 2 — Remove Element

const removeElement = (numbers, index) => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number))){
        return "Invalid"
    }
    if (!Number.isInteger(index) || index > numbers.length-1 || index < 0){
        return 'Invalid'
    }
    const copyOfNumbers = [...numbers];
    copyOfNumbers.splice(index, 1);
    return copyOfNumbers;
}

console.log(removeElement([10, 20, 30, 40], 2));