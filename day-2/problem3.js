// Problem 3 — Palindrome Checker

function isPalindrome(str){
    if (typeof str !== 'string'){
        return 'Invalid'
    }
    let reverse = "";
   
    for (const char of str){
        reverse = char+reverse;
    }
    return reverse.toLowerCase() === str.toLowerCase();
}

console.log(isPalindrome('madaM'))