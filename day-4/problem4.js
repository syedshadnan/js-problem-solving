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

console.log(capitalizeWords("i love javascript"));