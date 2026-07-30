function multiplication(number){
    if (typeof number !== 'number' || Number.isNaN(number) || !Number.isFinite(number)){
        return "Invalid"
    }
    let multiply = '';
    for (let i = 1; i <= 10; i++){
        // console.log(i*number);
        // multiply += `${i} x ${number} = ${i * number}\n`
       multiply += i + 'x' + number + ' = ' + (i * number) + '\n';
    }
    return multiply.trim()
}
console.log(multiplication(5));