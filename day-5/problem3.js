// 🟡 Problem 3 — Rotate Array Right

function rotateRight(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid'
    }
    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    let rotate = [numbers[numbers.length-1]];
    
    for (let i = 0; i <= numbers.length-2; i++){
        rotate.push(numbers[i])
    }

    return rotate;
}
console.log(rotateRight([1,2,3,4,5]));
console.log(rotateRight([1,2,'3',4,5]));