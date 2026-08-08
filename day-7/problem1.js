// 🟢 Problem 1 — Find the Difference
function findDifference(arr1, arr2){
    // Validations
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    for (const num of arr1){
        if (!Number.isFinite(num)){
            return 'Invalid'
        }
    }
    for (const num of arr2){
        if (!Number.isFinite(num)){
            return 'Invalid'
        }
    }
    let uniqueNumbers = [];
    for (const number of arr1){
        if (!arr2.includes(number) && !uniqueNumbers.includes(number)){
            uniqueNumbers.push(number)
        }
    }
    return uniqueNumbers
}

console.log(findDifference([1,1,1,2,3,4], [3,4,5,6]))