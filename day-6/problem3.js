// 🟡 Problem 3 — Chunk Array
function chunkArray (numbers, size){
    if (!Array.isArray(numbers) ||
!Number.isInteger(size) || size < 0){
    return 'Invalid'
}

const result = [];
let chunk = [];

for (const number of numbers){
    chunk.push(number);

    if (chunk.length === size){
        result.push(chunk);
        chunk = [];
    } 
}
    if (chunk.length <= 0){
        result.push(chunk)
    }
    return result;
}

console.log(chunkArray([1,2,3,4,5],2))