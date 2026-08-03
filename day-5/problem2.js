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

console.log(findLargestWord('I love JavaScript programming'))