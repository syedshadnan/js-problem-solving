// 🟢 Problem 1 — Find the Difference
function findDifference(arr1, arr2){
    // Validations
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    for (const num of arr1){
        if (!Number.isFinite(num)){
            return 'Invalid'
        }
    }
    for (const num of arr2){
        if (!Number.isFinite(num)){
            return 'Invalid'
        }
    }
    let uniqueNumbers = [];
    for (const number of arr1){
        if (!arr2.includes(number) && !uniqueNumbers.includes(number)){
            uniqueNumbers.push(number)
        }
    }
    return uniqueNumbers
}

// 🟢 Problem 2 — Count Words
function countWords(sentence){
    if (typeof sentence !== 'string'){
        return 'Invalid'
    }
    const sentenceTrim = sentence.trim();
    const splitSentence = sentenceTrim.split(' ');
    let countWords = 0;
    
    for (const word of splitSentence){
        if (word !== ''){
            countWords++
        }
    }
    return countWords;
}

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