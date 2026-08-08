// 🟠 Problem 4 — Most Frequent Word
function mostFrequentWord(sentence){
    if (typeof sentence !== 'string' || sentence.trim() === ''){
        return 'Invalid'
    }

    const splitSentence = sentence.toLowerCase().trim().split(/\s+/)

    const countMap = {}
    let wordCount = 0;
    let mostFrequentWord;

    for (const word of splitSentence){
        if (countMap[word]){
            countMap[word]+=1;
        } else {
            countMap[word] = 1;
        }
        if (countMap[word] > wordCount){
            wordCount = countMap[word];
            mostFrequentWord = word;
        }
    }
    return mostFrequentWord;
}
console.log(mostFrequentWord("JavaScript is fun and JavaScript is powerful"));
console.log(mostFrequentWord('    '))