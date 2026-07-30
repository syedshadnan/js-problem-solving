
function isEven(number){
    if (typeof number !== 'number' || Number.isNaN(number) || !Number.isInteger(number) || number === Infinity){
        return 'Invalid'
    }
    if (number % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(22));
console.log(isEven(21));
console.log(isEven(NaN));
console.log(isEven(20.20));
console.log(isEven(Infinity));

