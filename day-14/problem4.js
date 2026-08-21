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


console.log(replaceRange(
  [10, 20, 30, 40, 50],
  1,
  2,
  200,
  300
));