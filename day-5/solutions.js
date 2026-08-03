// 🟢 Problem 1 — Check Palindrome
function isPalindrome(text){
    if (typeof text !== 'string'){
        return 'Invalid'
    }
    let reverse = '';
    for (const char of text){
        reverse = char + reverse
    }
    if (reverse.toLowerCase() === text.toLowerCase()){
        return true;
    }
    return false;
}

// 🟢 Problem 2 — Find Largest Word
function findLargestWord(sentence){
    if (typeof sentence !== 'string' || sentence.length === 0){
        return 'Invalid'
    }

    const splitSentence = sentence.split(' ');
    let largest = splitSentence[0];

    for (const word of splitSentence){
        if (word.length > largest.length){
            largest = word;
        }
    }
    return largest;
}

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

// 🟠 Problem 4 — Count Vowels
function countVowels(text){
    if (typeof text !== 'string'){
        return 'Invalid'
    }

    const vowelList = 'aeiouAEIOU'
    let count = 0;

    for (const char of text){
        if (vowelList.includes(char)){
            count++
        }
    }
    return count;
}

// 🔴 Problem 5 ⭐ Daily Challenge
function firstUniqueCharacter(text){
    if (typeof text !== 'string'){
        return 'Invalid'
    }
    let countMap = {};


    for (const char of text){
        if (countMap[char]){
            countMap[char]+=1
        } else{
            countMap[char] = 1;
        }
    }

    for (const char of text){
            if (countMap[char] === 1){
                return char;
        }
}
return null
}