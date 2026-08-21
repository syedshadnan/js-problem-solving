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

// 🟡 Problem 3 — Insert Element
const insertElement = (numbers, index, value) => {
    if(!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number)) || !Number.isFinite(value) || !Number.isInteger(index) || index > numbers.length){
        return 'Invalid'
    }
    const newArr = [...numbers];
    newArr.splice(index,0, value);
    return newArr;
}

// 🟠 Problem 4 — Replace Range

const replaceRange = (numbers, start, deleteCount, ...values) => {
    
    if (!Array.isArray(numbers) || numbers.some(number => !Number.isFinite(number)) || !Number.isInteger(start) || !Number.isInteger(deleteCount) || start < 0 || deleteCount < 0){
        return 'Invalid'
    }
    if (!Array.isArray(values) ||values.some(value => !Number.isFinite(value))){
        return 'Invalid'
    }
    
    const copyNumbers = [...numbers];
    copyNumbers.splice(start,deleteCount,...values);
    return copyNumbers;

}

// 🔴 Problem 5 ⭐ Daily Challenge — Safe Array Editor
const editArray = (numbers, operation) => {
    // validation starts here
    if (!Array.isArray(numbers) || numbers.some(number => !Number.isFinite(number))){
        return 'Invalid'
    }
    const allowedTypes = ['remove', 'replace', 'insert'];
    if (Array.isArray(operation) || !operation || typeof operation !== 'object' || !Number.isInteger(operation.index) || operation.index < 0 || !allowedTypes.includes(operation.type)){
        return 'Invalid'
    }
    if (operation.type === 'remove' || operation.type === 'replace'){
        if (operation.index > numbers.length-1 || numbers.length === 0){
            return 'Invalid'
        }
    }
    if (operation.type === 'insert'){
        if (operation.index > numbers.length || operation.index < 0 || !Number.isFinite(operation.value)){
            return 'Invalid'
        }
    }
    // validation ends here
    const copyNumbers = [...numbers];
    if (operation.type === 'remove'){
        copyNumbers.splice(operation.index,1);
        return copyNumbers;
    }
    if (operation.type === 'insert'){
        copyNumbers.splice(operation.index,0,operation.value);
        return copyNumbers;
    }
    if (operation.type === 'replace'){
        copyNumbers.splice(operation.index,1, operation.value);
        return copyNumbers;
    }

}