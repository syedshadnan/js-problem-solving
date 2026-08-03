# Day 5 - Problem Solving Questions

## 🟢 Problem 1 — Check Palindrome

Write a function `isPalindrome(text)`.

Return:
- `true` if the string is the same forwards and backwards.
- `false` otherwise.

Rules:
- Ignore uppercase/lowercase.
- Return `"Invalid"` if the input is not a string.

Example:

isPalindrome("madam") → true

isPalindrome("Level") → true

isPalindrome("hello") → false

---

## 🟢 Problem 2 — Find Largest Word

Write a function `findLargestWord(sentence)`.

Return the longest word in a sentence.

Rules:
- Return `"Invalid"` if the input is not a string.
- Return `"Invalid"` for an empty string.

Example:

findLargestWord("I love JavaScript programming")

Output:

programming

---

## 🟡 Problem 3 — Rotate Array Right

Write a function `rotateRight(numbers)`.

Move the last element to the beginning of the array.

Example:

[1,2,3,4]

↓

[4,1,2,3]

Rules:
- Return `"Invalid"` if the input is not an array.
- Return `"Invalid"` if any element is not a finite number.

---

## 🟠 Problem 4 — Count Vowels

Write a function `countVowels(text)`.

Count how many vowels are in the string.

Vowels:

a, e, i, o, u

Rules:
- Ignore uppercase/lowercase.
- Return `"Invalid"` if the input is not a string.

Example:

countVowels("JavaScript")

Output:

3

---

## 🔴 Problem 5 ⭐ Daily Challenge

Write a function `firstUniqueCharacter(text)`.

Return the first non-repeating character.

If every character repeats, return `null`.

Rules:
- Ignore uppercase/lowercase.
- Return `"Invalid"` if the input is not a string.

Example:

firstUniqueCharacter("aabbcdde")

Output:

c

Example:

firstUniqueCharacter("aabbcc")

Output:

null