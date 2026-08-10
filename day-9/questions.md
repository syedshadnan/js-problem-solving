# 📅 Day 9

> 🎯 Fundamentals + ES6 Introduction

## 🟢 Problem 1 — Format User Info

Write a function `formatUser(user)` that returns a formatted string using the user's information.

### Example

```javascript
formatUser({
  name: "Ifty",
  age: 25
});

// "My name is Ifty and I am 25 years old."
```

### Requirements

* Input must be an object.
* Object must contain:

  * `name` (string)
  * `age` (finite number)
* Return `"Invalid"` for invalid input.

---

## 🟢 Problem 2 — Merge Arrays

Write a function `mergeUnique(arr1, arr2)` that merges two arrays and returns only unique values.

### Example

```javascript
mergeUnique([1, 2, 3], [3, 4, 5]);

// [1, 2, 3, 4, 5]
```

### Requirements

* Both inputs must be arrays.
* All elements must be finite numbers.
* Return `"Invalid"` for invalid input.

---

## 🟡 Problem 3 — Find Product By ID

Write a function `findProduct(products, id)`.

Return the product object whose `id` matches the given id.

### Example

```javascript
findProduct(
  [
    { id: 1, name: "Keyboard" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Monitor" }
  ],
  2
);

// { id: 2, name: "Mouse" }
```

### Requirements

* `products` must be an array.
* Every product must contain:

  * `id` (finite number)
  * `name` (string)
* Return `null` if no matching product exists.
* Return `"Invalid"` for invalid input.

---

## 🟠 Problem 4 — Count Passed Students

Write a function `countPassedStudents(students)`.

A student is considered passed if their marks are **40 or above**.

### Example

```javascript
countPassedStudents([
  { name: "John", marks: 80 },
  { name: "Alice", marks: 35 },
  { name: "Bob", marks: 50 }
]);

// 2
```

### Requirements

* Input must be an array.
* Each student must have:

  * `name` (string)
  * `marks` (finite number)
* Return `"Invalid"` for invalid input.

---

## 🔴 Problem 5 ⭐ Daily Challenge — Library Analyzer

Write a function `analyzeLibrary(books)`.

Each book object contains:

```javascript
{
  title: "JavaScript Basics",
  pages: 250,
  borrowed: true
}
```

### Example

```javascript
analyzeLibrary([
  {
    title: "JavaScript Basics",
    pages: 250,
    borrowed: true
  },
  {
    title: "React Guide",
    pages: 400,
    borrowed: false
  },
  {
    title: "Node.js Mastery",
    pages: 350,
    borrowed: true
  }
]);
```

### Output

```javascript
{
  totalBooks: 3,
  borrowedBooks: 2,
  totalPages: 1000,
  largestBook: "React Guide"
}
```

### Rules

* Calculate total books.
* Count borrowed books.
* Calculate total pages.
* Find the book with the highest number of pages.
* If multiple books have the same highest page count, return the first one.
* Return `"Invalid"` for invalid input.

### Validation Requirements

* Input must be an array.
* Each book must be an object.
* Each object must contain:

  * `title` (string)
  * `pages` (finite number)
  * `borrowed` (boolean)

---

# 🎯 Skills Practiced

* ✅ Objects
* ✅ Arrays
* ✅ Validation
* ✅ Data Aggregation
* ✅ Object Searching
* ✅ ES6 Features
* ✅ Real-World Data Processing
* ✅ Algorithmic Thinking

---

⭐ **Completed:** JavaScript Problem Solving - Day 9
