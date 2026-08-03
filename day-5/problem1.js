// 🟢 Problem 1 — Check Palindrome

function isPalindrome(text){
    if (typeof text !== 'string'){
        return 'Invalid'
    }
    let reverse = '';
    for (const char of text){
        reverse = char + reverse
    }
    if (reverse.toLowerCase() === text.toLowerCase()){
        return true;
    }
    return false;
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('hello'))
console.log(isPalindrome(1111));