# 📅 Day 7

## 🟢 Problem 1 — Find the Difference

Write a function `findDifference(arr1, arr2)` that returns the numbers that exist in `arr1` but not in `arr2`.

### Example

```javascript
findDifference([1, 2, 3, 4], [3, 4, 5, 6]);
// [1, 2]
```

### Requirements

* Input must be two arrays.
* All elements must be finite numbers.
* Return `"Invalid"` for invalid input.
* Return only unique values.

---

## 🟢 Problem 2 — Count Words

Write a function `countWords(sentence)` that returns the total number of words in a sentence.

### Example

```javascript
countWords("I love JavaScript programming");
// 4
```

### Requirements

* Input must be a string.
* Multiple spaces should not affect the count.
* Return `"Invalid"` for invalid input.

---

## 🟡 Problem 3 — Group Numbers

Write a function `groupEvenOdd(numbers)` that returns an object containing even and odd numbers separately.

### Example

```javascript
groupEvenOdd([1, 2, 3, 4, 5, 6]);
```

### Output

```javascript
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}
```

### Requirements

* Input must be an array.
* All elements must be finite numbers.
* Return `"Invalid"` for invalid input.

---

## 🟠 Problem 4 — Character Frequency

Write a function `characterFrequency(text)` that returns an object containing the frequency of each character.

### Example

```javascript
characterFrequency("hello");
```

### Output

```javascript
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

### Requirements

* Input must be a string.
* Ignore uppercase/lowercase (`"A"` and `"a"` should be treated the same).
* Return `"Invalid"` for invalid input.

---

## 🔴 Problem 5 ⭐ Daily Challenge — Most Frequent Character

Write a function `mostFrequentCharacter(text)` that returns the character that appears most frequently.

### Example

```javascript
mostFrequentCharacter("javascript");
```

### Output

```javascript
"a"
```

### Another Example

```javascript
mostFrequentCharacter("aabbcc");
```

### Output

```javascript
"a"
```

> If multiple characters have the same highest frequency, return the one that appears first in the string.

### Requirements

* Input must be a string.
* Ignore uppercase/lowercase.
* Return `"Invalid"` for invalid input.
* Return `null` for an empty string.

---

# 🎯 Skills Practiced

* ✅ Arrays
* ✅ Strings
* ✅ Objects
* ✅ Frequency Counting
* ✅ Input Validation
* ✅ Data Grouping
* ✅ Object Manipulation
* ✅ Algorithmic Thinking

---

⭐ **Completed:** JavaScript Problem Solving - Day 7
