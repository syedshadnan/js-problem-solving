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

console.log(editArray(
  [10, 20, 30, 40],
  {
    type: "remove",
    index: 2
  }
));
console.log(editArray(
  [10, 20, 30, 40],
  {
    type: "insert",
    index: 2,
    value: 99
  }
));

console.log(editArray(
  [10, 20, 30, 40],
 {
  type: "replace",
  index: 1,
  value: 100
}
));



