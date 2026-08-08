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
console.log(countWords("I love JavaScript      programming"))