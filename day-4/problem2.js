// 🟢 Problem 2 — Anagram Checker

function isAnagram(str1, str2){
    if (typeof str1 !== 'string' || typeof str2 !== 'string'){
        return 'Invalid'
    }
    
    const lowerStr1 = str1.toLowerCase().replaceAll(' ', "");
    const lowerStr2 = str2.toLowerCase().replaceAll(" ","");
    if (lowerStr1.length !== lowerStr2.length){
        return false;
    }
    
    const sortedStr1 = lowerStr1.split('').sort().join('');
    const sortedStr2 = lowerStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("Listen", "Silent"));          // true
console.log(isAnagram("Triangle", "Integral"));      // true
console.log(isAnagram("Dormitory", "Dirty room"));   // true
console.log(isAnagram("Hello", "World"));            // false
console.log(isAnagram("School", "School"));          // true
console.log(isAnagram("A gentleman", "Elegant man"));// true
console.log(isAnagram("", ""));                      // true
console.log(isAnagram(123, "abc"));                  // Invalid