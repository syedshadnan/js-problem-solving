# 📅 Day 13

> 🎯 ES6 Array Method — `sort()` & Data Ordering

## 🟢 Problem 1 — Sort Numbers Ascending

Write a function `sortAscending(numbers)`.

Return a new array sorted from smallest to largest.

### Example

```javascript
sortAscending([5, 1, 10, 3]);

// [1, 3, 5, 10]
```

### Requirements

* Input must be an array.
* All elements must be finite numbers.
* Do not mutate the original array.
* Return `"Invalid"` for invalid input.

---

## 🟢 Problem 2 — Sort Numbers Descending

Write a function `sortDescending(numbers)`.

Return a new array sorted from largest to smallest.

### Example

```javascript
sortDescending([5, 1, 10, 3]);

// [10, 5, 3, 1]
```

### Requirements

* Input must be an array.
* All elements must be finite numbers.
* Do not mutate the original array.
* Return `"Invalid"` for invalid input.

---

## 🟡 Problem 3 — Sort Product Prices

Write a function `sortProductsByPrice(products)`.

Return products sorted by price from lowest to highest.

### Example

```javascript
sortProductsByPrice([
  { name: "Keyboard", price: 2000 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 12000 }
]);
```

### Output

```javascript
[
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 12000 }
]
```

### Requirements

* Input must be an array.
* Every product must contain:

  * `name` (string)
  * `price` (finite number)
* Do not mutate the original array.
* Return `"Invalid"` for invalid input.

---

## 🟠 Problem 4 — Top Scorer

Write a function `topScorer(students)`.

Return the student object with the highest marks.

### Example

```javascript
topScorer([
  { name: "John", marks: 80 },
  { name: "Alice", marks: 95 },
  { name: "Bob", marks: 90 }
]);
```

### Output

```javascript
{ name: "Alice", marks: 95 }
```

### Requirements

* Input must be an array.
* Every student must contain:

  * `name` (string)
  * `marks` (finite number)
* Use `sort()`.
* Return the first student if multiple students have the same highest marks.
* Return `"Invalid"` for invalid input.

---

## 🔴 Problem 5 ⭐ Daily Challenge — Movie Ranking System

Write a function `movieRanking(movies)`.

### Input

```javascript
[
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 9.2 },
  { title: "Movie C", rating: 7.8 }
]
```

### Output

```javascript
{
  highestRated: "Movie B",
  lowestRated: "Movie C",
  averageRating: 8.5
}
```

### Requirements

* Input must be an array.
* Every movie must contain:

  * `title` (string)
  * `rating` (finite number)
* Use `sort()`.
* Calculate average rating.
* Do not mutate the original array.
* Return `"Invalid"` for invalid input.

---

# 🎯 Skills Practiced

* ✅ sort()
* ✅ Ascending & Descending Sorting
* ✅ Sorting Arrays of Objects
* ✅ Data Ranking
* ✅ Data Ordering
* ✅ Aggregation with reduce()
* ✅ Avoiding Mutation
* ✅ Real-World Data Processing

---

⭐ **Completed:** JavaScript Problem Solving - Day 13
