// 🟠 Problem 4 — Count Vowels

function countVowels(text){
    if (typeof text !== 'string'){
        return 'Invalid'
    }

    const vowelList = 'aeiouAEIOU'
    let count = 0;

    for (const char of text){
        if (vowelList.includes(char)){
            count++
        }
    }
    return count;
}
console.log(countVowels("JavaScript"))