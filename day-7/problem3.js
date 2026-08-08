// 🟡 Problem 3 — Group Numbers
function groupEvenOdd(numbers){
    // validations
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    const even = [];
    const odd = [];

    for (const number of numbers){
        if (number % 2 === 0){
            even.push(number)
        }
        else{
            odd.push(number)
        }
    }
    return {
        even,
        odd
    }
}

console.log(groupEvenOdd([1,2,3,4,5,6]))