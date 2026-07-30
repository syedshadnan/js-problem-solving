function findLargest(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid'
    }
    let largest = numbers[0];

    for (const number of numbers){
        if (typeof number !== 'number' || Number.isNaN(number) || number === Infinity){
            return 'Invalid'
        }
        if (number > largest){
            largest = number;
        }
    }
    return largest;
}

console.log(findLargest([4,8,2,10,6]));
console.log(findLargest([4,'8',2,10,6]));
console.log(findLargest([4,8,NaN,10,6]));
console.log(findLargest([Infinity,8,2,10,6]));