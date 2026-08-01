// 🟡 Problem 4 — Remove Duplicates

function removeDuplicates(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    const newArr = [];

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (!newArr.includes(number)){
            newArr.push(number);
        }
    }
    return newArr;
}
console.log(removeDuplicates([1,2,2,3,4,4,5]))
console.log(removeDuplicates([1,2,NaN,3,4,4,5]))
console.log(removeDuplicates([1,2,null,3,4,4,5]))
console.log(removeDuplicates([1,2,undefined,3,4,4,5]))
console.log(removeDuplicates([Infinity, Infinity, Infinity]))
console.log(removeDuplicates([]))

