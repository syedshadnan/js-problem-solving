// Problem 1 — Count Even Numbers
function countEven(numbers){
    if (!Array.isArray(numbers)){
        return "Invalid"
    }
    let count = 0;

    for (const number of numbers){
        if (typeof number !== 'number' || !Number.isFinite(number)){
            return 'Invalid'
        }
        if (number % 2 === 0){
            count++
        }
    }
    return count;
}

// Problem 2 — Find the Smallest Number
function findSmallest (numbers){
    if (!Array.isArray(numbers) || numbers.length < 1){
        return 'Invalid'
    }
    let smallest = numbers[0];

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number < smallest){
            smallest = number;
        }
    }
    return smallest
}


// Problem 3 — Palindrome Checker
function isPalindrome(str){
    if (typeof str !== 'string'){
        return 'Invalid'
    }
    let reverse = "";
   
    for (const char of str){
        reverse = char+reverse;
    }
    return reverse.toLowerCase() === str.toLowerCase();
}

// Problem 4 — Count Positive Numbers
function countPositiveNumbers(numbers){
    if (!Array.isArray(numbers)){
        return "Invalid"
    }
    let positiveNumberCount = 0;

    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > 0){
            positiveNumberCount++
        }
    }
    return positiveNumberCount;
}

// Problem 5 — Find the Longest Word
function longestWord(sentence){
    if (typeof sentence !== 'string'){
        return 'Invalid'
    }
    const splitWords = sentence.split(' ');
    let longest = splitWords[0];

    for (const word of splitWords){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}