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

console.log(insertElement([10, 20, 40, 50], 2, 30))