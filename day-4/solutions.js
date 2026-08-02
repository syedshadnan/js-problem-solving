// 🟢 Problem 1 — Find Missing Number
function findMissing(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid';
    }
    let max = numbers[0];

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > max){
            max = number;
        }
    }
    let missing;
    for (let i = 1; i <= max; i++){
        if (!numbers.includes(i)){
            return i
        }
    }
     return 'NO MISSING NUMBER'
}

// 🟢 Problem 2 — Anagram Checker
function isAnagram(str1, str2){
    if (typeof str1 !== 'string' || typeof str2 !== 'string'){
        return 'Invalid'
    }
    
    const lowerStr1 = str1.toLowerCase().replaceAll(' ', "");
    const lowerStr2 = str2.toLowerCase().replaceAll(" ","");
    if (lowerStr1.length !== lowerStr2.length){
        return false;
    }
    
    const sortedStr1 = lowerStr1.split('').sort().join('');
    const sortedStr2 = lowerStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// 🟡 Problem 3 — Find the Most Frequent Number
function mostFrequent(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid'
    }
    const countMap = {};
    let maxCount = 0;
    let mostFrequentNumber;

   
    for (const num of numbers){
   
        if (!Number.isFinite(num)){
            return 'Invalid'
        }
        if (countMap[num]) {
            countMap[num] += 1
        } else {
            countMap[num] = 1;
        }
        if (countMap[num] > maxCount){
            maxCount = countMap[num];
            mostFrequentNumber = num;
        }
    }
    return mostFrequentNumber;
}

// 🟠 Problem 4 — Capitalize First Letter
function capitalizeWords(sentence){
    if (typeof sentence !== 'string' || sentence.length < 1){
        return 'Invalid'
    }
    let newArr = [];
    const words = sentence.split(' ')
    for (const word of words){
       const firstChar = word[0].toUpperCase();
        const restCharacters = word.slice(1)
        const capitalized = firstChar+restCharacters;
        newArr.push(capitalized);
    }
     return newArr.join(' ')
}

// 🔴 Problem 5 ⭐ Daily Challenge
function longestCommonPrefix(words) {
    if (!Array.isArray(words) || words.length === 0) {
        return "Invalid";
    }

    for (const word of words) {
        if (typeof word !== "string") {
            return "Invalid";
        }
    }

    const firstWord = words[0];
    let prefix = "";

    for (let i = 0; i < firstWord.length; i++) {

        const currentChar = firstWord[i];

        for (const word of words) {

            if (word[i] !== currentChar) {
                return prefix;
            }

        }

        prefix += currentChar;
    }

    return prefix;
}