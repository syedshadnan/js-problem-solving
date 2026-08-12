// 🟢 Problem 1 — Double Numbers

const doubleNumbers = numbers =>{
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    for (const number of numbers){
        if(!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    return numbers.map(number => number * 2)
}

console.log(doubleNumbers([1,2,3]));