// 🟡 Problem 3 — Find Duplicate Numbers
function findDuplicates(numbers){
    if(!Array.isArray(numbers)){
        return 'Invalid'
    }
    const uniqueDuplicate = [];
    const countMap = {}
    
    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (countMap[number]){
            countMap[number]+=1
        } else {
            countMap[number] = 1;
        }
        if (countMap[number] > 1 && !uniqueDuplicate.includes(number)){
            uniqueDuplicate.push(number)
        }
    }
    return uniqueDuplicate;
}

console.log(findDuplicates([1,1,1, 2, 3, 2, 4, 5, 1, 6]))