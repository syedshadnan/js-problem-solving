// 🟡 Problem 5 — Sum of Positive Numbers

function sumPositive(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    let sum = 0;

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > 0){
            sum+=number
        }
    }
    return sum;
}

console.log(sumPositive([-5,10,20,-2,8]))