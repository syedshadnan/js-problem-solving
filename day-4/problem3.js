// 🟡 Problem 3 — Find the Most Frequent Number

function mostFrequent(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid'
    }
    const countMap = {};
    let maxCount = 0;
    let mostFrequentNumber;

   
    for (const num of numbers){
        // const num = numbers[i]
        // console.log(num)

        if (!Number.isFinite(num)){
            return 'Invalid'
        }

        if (countMap[num]) {
            countMap[num] += 1
        } else {
            countMap[num] = 1;
        }
        if (countMap[num] > maxCount){
            maxCount = countMap[num];
            mostFrequentNumber = num;
        }

    }
    return mostFrequentNumber;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
// console.log(mostFrequent("hello"));              
// console.log(mostFrequent([]));                  
// console.log(mostFrequent([1, 2, "abc", 3]));      