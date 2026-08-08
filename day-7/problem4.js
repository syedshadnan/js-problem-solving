// 🟠 Problem 4 — Character Frequency
function characterFrequency(str){
    if (typeof str !== 'string'){
        return 'Invalid'
    } 
    const newStr = str.toLowerCase()
    const splitStr = newStr.split('')
    let countMap = {}
    for (const char of splitStr){
        if (countMap[char]){
            countMap[char]+=1
        } else {
            countMap[char] = 1;
        }
    }
    return countMap;
}

console.log(characterFrequency("hello"))