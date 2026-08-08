# 📅 Day 8

## 🟢 Problem 1 — Unique Positive Numbers

Write a function `uniquePositiveNumbers(numbers)` that returns all unique positive numbers from an array.

### Example

```javascript
uniquePositiveNumbers([-5, 2, 2, 7, -1, 7, 10]);

// [2, 7, 10]
```

### Requirements

* Input must be an array.
* All elements must be finite numbers.
* Ignore zero and negative numbers.
* Return `"Invalid"` for invalid input.

---

## 🟢 Problem 2 — Word Frequency

Write a function `wordFrequency(sentence)` that returns the frequency of each word.

### Example

```javascript
wordFrequency("I love JavaScript I love coding");
```

### Output

```javascript
{
  i: 2,
  love: 2,
  javascript: 1,
  coding: 1
}
```

### Requirements

* Input must be a string.
* Ignore uppercase/lowercase.
* Multiple spaces should not affect the result.
* Return `"Invalid"` for invalid input.

---

## 🟡 Problem 3 — Find Duplicate Numbers

Write a function `findDuplicates(numbers)` that returns all numbers that appear more than once.

### Example

```javascript
findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]);
```

### Output

```javascript
[1, 2]
```

### Requirements

* Input must be an array.
* All elements must be finite numbers.
* Return only unique duplicate numbers.
* Return `"Invalid"` for invalid input.

---

## 🟠 Problem 4 — Most Frequent Word

Write a function `mostFrequentWord(sentence)` that returns the word that appears most frequently.

### Example

```javascript
mostFrequentWord("JavaScript is fun and JavaScript is powerful");
```

### Output

```javascript
"javascript"
```

### Another Example

```javascript
mostFrequentWord("one two one two");
```

### Output

```javascript
"one"
```

> If multiple words have the same highest frequency, return the one that appears first in the sentence.

### Requirements

* Input must be a string.
* Ignore uppercase/lowercase.
* Return `"Invalid"` for invalid input.
* Return `null` for an empty string.

---

## 🔴 Problem 5 ⭐ Capstone Challenge — Student Result Analyzer

Write a function `analyzeResults(students)`.

Each student object contains:

```javascript
{
  name: "John",
  marks: [80, 90, 70]
}
```

### Example

```javascript
analyzeResults([
  {
    name: "John",
    marks: [80, 90, 70]
  },
  {
    name: "Alice",
    marks: [95, 90, 100]
  }
]);
```

### Output

```javascript
{
  topStudent: "Alice",
  averageMarks: 87.5
}
```

### Rules

* Calculate each student's average marks.
* Find the student with the highest average.
* Calculate the overall average of all marks.
* If multiple students have the same highest average, return the first one.
* Return `"Invalid"` for invalid input.

### Validation Requirements

* Input must be an array.
* Each student must be an object.
* Each object must contain:

  * `name` (string)
  * `marks` (array)
* All marks must be finite numbers.
* No empty marks array allowed.

---

# 🎯 Skills Practiced

* ✅ Arrays
* ✅ Strings
* ✅ Objects
* ✅ Nested Loops
* ✅ Frequency Counting
* ✅ Data Validation
* ✅ Aggregation Logic
* ✅ Real-World Data Processing
* ✅ Algorithmic Thinking

---

⭐ **Completed:** JavaScript Problem Solving - Day 8
