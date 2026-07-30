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

console.log(countVowels('Programming'));
console.log(countVowels(123));
console.log(countVowels(''));