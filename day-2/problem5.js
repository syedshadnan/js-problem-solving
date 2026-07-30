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
console.log(longestWord("I love JavaScript programming"));