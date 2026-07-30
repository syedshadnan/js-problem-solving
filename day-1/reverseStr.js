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
    return reverse.join('')
}
console.log(reverseAWord('banana'))