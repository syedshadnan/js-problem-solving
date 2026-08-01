// 🟡 Problem 3 — Count Character

function countCharacter(text, character){
    if (typeof text !== 'string' || typeof character !== 'string' || character.length !== 1){
        return 'Invalid'
    }

    const lowerText = text.toLowerCase();
    const lowerChar = character.toLowerCase();

    let count = 0;
    for (const char of lowerText){
        if (char === lowerChar){
            count++
        }
    }

    return count;

}

console.log(countCharacter('JavaScript','a'))