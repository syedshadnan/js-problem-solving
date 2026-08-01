// problem:1
function isEven(number){
    if (typeof number !== 'number' || Number.isNaN(number) || !Number.isInteger(number) || number === Infinity){
        return 'Invalid'
    }
    if (number % 2 === 0){
        return true;
    }
    return false;
}

// problem:2
function countVowels(str){
    if (typeof str !== 'string' || str.length === 0){
        return 'Invalid'
    }
    const vowelsList = 'aeiouAEIOU';
    let count = 0;
    
    for (const letter of str){
        if (vowelsList.includes(letter)){
        count++
    }
    }
    return count;
}

// problem:3
function findLargest(numbers){
    if (!Array.isArray(numbers) || numbers.length === 0){
        return 'Invalid'
    }
    let largest = numbers[0];

    for (const number of numbers){
        if (typeof number !== 'number' || Number.isNaN(number) || number === Infinity){
            return 'Invalid'
        }
        if (number > largest){
            largest = number;
        }
    }
    return largest;
}

// problem:4
function reverseText(text){
    if (typeof text !== 'string' || text.length === 0){
        return 'Invalid'
    }
    let reverse = "";
    for (let i = text.length-1; i >= 0; i--){
        reverse+=text[i]
    }
    return reverse;

}
// console.log(reverseText('hello'));
// console.log(reverseText(123));
// console.log(reverseText(''))

// again: problem-4
function reverseStr(text){
    if (typeof text !== 'string' || text.length === 0){
        return 'Invalid'
    }
    let reverse = "";
    for (let char of text){
        reverse = char + reverse;
    }
    return reverse;
}
console.log(reverseStr('cat'));

// again: problem-4
function reverseString (word){
    if (typeof word !== 'string' || word.length === 0){
        return 'Invalid'
    }
    let reverse = "";
    while (i >= 0){
        reverse += word[i];
        i--
    }
    return reverse;
}
console.log(reverseStr('hello'));

// again: problem-4

function reverseAWord(word){
    if (typeof word !== 'string' || word.length === 0){
        return 'Invalid'
    }
    let reverse = [];
    const splitWord = word.split('');
    for (let i = word.length-1; i>=0; i--){
        reverse.push(word[i]);
    }
    return reverse.join('');
}
console.log(reverseAWord('banana'));

// problem: 5
function multiplication(number){
    if (typeof number !== 'number' || Number.isNaN(number) || !Number.isFinite(number)){
        return "Invalid"
    }
    let table = [];
    for (let i = 1; i <= 10; i++){
        multiply.push(number*i)
    }
    return multiply;
}
console.log(multiplication(5));