# Day 13

## Topics Learned

* `sort()`
* Ascending Sorting
* Descending Sorting
* Sorting Arrays of Objects
* Data Ordering
* Avoiding Mutation with Spread Operator

---

## Problems Solved

1. Sort Numbers Ascending
2. Sort Numbers Descending
3. Sort Product Prices
4. Top Scorer
5. Movie Ranking System

---

## Key Learnings

### sort()

* Used to arrange array elements in a specific order.
* Can sort numbers, strings, and objects.
* By default, JavaScript sorts values as strings.

Example:

```javascript
[100, 5, 20, 1].sort();

// [1, 100, 20, 5]
```

---

### Numeric Sorting

Ascending:

```javascript
numbers.sort((a, b) => a - b);
```

Descending:

```javascript
numbers.sort((a, b) => b - a);
```

---

### Sorting Objects

Sort products by price:

```javascript
products.sort((a, b) => a.price - b.price);
```

Sort students by marks:

```javascript
students.sort((a, b) => b.marks - a.marks);
```

---

### sort() Mutates

Unlike `map()`, `filter()`, and `reduce()`, `sort()` changes the original array.

Example:

```javascript
const numbers = [3, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);

// [1, 2, 3]
```

---

### Avoiding Mutation

Create a copy before sorting:

```javascript
const sorted = [...numbers].sort((a, b) => a - b);
```

This is important in React because React prefers immutable updates.

---

## Common Mistakes

### Mistake 1

Forgot that:

```javascript
sort()
```

sorts values as strings by default.

Example:

```javascript
[5, 1, 10].sort();

// [1, 10, 5]
```

---

### Mistake 2

Used:

```javascript
.find(student => student.marks > 0)
```

after sorting in `topScorer()`.

Correction:

```javascript
const sorted = [...students].sort(
  (a, b) => b.marks - a.marks
);

return sorted[0];
```

---

### Mistake 3

Typo in Movie Ranking System:

```javascript
highestRate
```

Correction:

```javascript
highestRated
```

---

### Mistake 4

Forgot to handle empty array edge cases in some problems.

Added:

```javascript
if (!Array.isArray(data) || data.length === 0) {
  return "Invalid";
}
```

when appropriate.

---

## Strengths

* Strong input validation.
* Consistent use of `some()` for validation.
* Good understanding of ascending vs descending sorting.
* Correct use of spread operator to avoid mutation.
* Comfortable sorting arrays of objects.
* Improved edge-case awareness.

---

## Weak Areas

* Need more practice identifying edge cases before testing.
* Sometimes overcomplicate solutions after sorting (e.g., using `find()` when the answer is already at index `0`).
* Need to be more careful with property names and output structure.

---

## Day Score

9.8 / 10

---

## Revision Suggestions

Review:

* `map()`
* `filter()`
* `find()`
* `some()`
* `every()`
* `reduce()`
* `sort()`

Focus on:

* Which methods mutate arrays
* Which methods return new arrays
* Combining multiple array methods to solve real-world problems

---

## Confidence Level

9.5 / 10

---

## Ready For

### Day 14

Topics:

* `slice()`
* `splice()`
* Array Copying
* Array Modification
* Mutating vs Non-Mutating Methods

⭐ **Completed:** JavaScript Problem Solving — Day 13 🚀
