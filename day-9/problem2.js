// 🟢 Problem 2 — Merge Arrays

const mergeUnique = (arr1, arr2) =>{

    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    
        const newArr = [];

    for (const number of arr1){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (!newArr.includes(number)){
            newArr.push(number)
        }
    }
    for (const number of arr2){
            if (!Number.isFinite(number)){
                return 'Invalid'
            }
            if (!newArr.includes(number)){
                newArr.push(number)
            }
        }

        // modern js
        const esSix = [...arr1,...arr2];
        const uniqueNumbers = [...new Set(esSix)]
        
    
    return uniqueNumbers;   // returning from es6 eay

    // return newarr        //this is tradional way
        
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5]));