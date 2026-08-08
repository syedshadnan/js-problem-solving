// 🟢 Problem 2 — Word Frequency
function wordFrequency(sentence){
    if (typeof sentence !== 'string' || sentence.trim === ''){
        return 'Invalid'
    }
    const splitSentence = sentence.toLowerCase().trim().split(/\s+/);
    const countMap = {};

    for (const word of splitSentence){
        if (countMap[word]){
            countMap[word]+=1;
        } else {
            countMap[word] = 1;
        }
    }
    return countMap;
}



console.log(wordFrequency("I          love JavaScript i I love coding"))