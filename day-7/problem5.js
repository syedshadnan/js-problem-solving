// 🔴 Problem 5 ⭐ Daily Challenge — Most Frequent Character
function mostFrequentCharacter(str){
    if (typeof str !== 'string' || str.length === 0){
        return 'Invalid'
    }
    const splitStr = str.toLowerCase().split(' ').join('');

    const countMap = {};
    let maxCount = 0;
    let mostFrequentChar;
    
    for (const char of splitStr){
        if (countMap[char]){
            countMap[char] += 1
        } else {
            countMap[char] = 1;
        }
        if (countMap[char] > maxCount){
            maxCount = countMap[char];
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar
}

console.log(mostFrequentCharacter("I LOVE A A A Javascript"))