# 📅 Day 10

> 🎯 ES6 Array Methods (map, filter, forEach)

## 🟢 Problem 1 — Double Numbers

Write a function `doubleNumbers(numbers)`.

Return a new array where every number is multiplied by 2.

### Example

```javascript
doubleNumbers([1, 2, 3]);

// [2, 4, 6]
```

### Requirements

- Input must be an array.
- All elements must be finite numbers.
- Return `"Invalid"` for invalid input.

---

## 🟢 Problem 2 — Get Adult Users

Write a function `getAdults(users)`.

Return only users whose age is 18 or above.

### Example

```javascript
getAdults([
  { name: "John", age: 15 },
  { name: "Alice", age: 22 }
]);

// [{ name: "Alice", age: 22 }]
```

### Requirements

- Input must be an array.
- Every user must contain:
  - `name` (string)
  - `age` (finite number)
- Return `"Invalid"` for invalid input.

---

## 🟡 Problem 3 — Extract Product Names

Write a function `getProductNames(products)`.

Return an array containing only product names.

### Example

```javascript
[
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" }
]
```

### Output

```javascript
["Keyboard", "Mouse"]
```

### Requirements

- Input must be an array.
- Every product must contain:
  - `id` (finite number)
  - `name` (string)
- Return `"Invalid"` for invalid input.

---

## 🟠 Problem 4 — Passed Students Report

Write a function `passedStudents(students)`.

Return the names of students whose marks are 40 or above.

### Example

```javascript
[
  { name: "John", marks: 80 },
  { name: "Alice", marks: 35 },
  { name: "Bob", marks: 50 }
]
```

### Output

```javascript
["John", "Bob"]
```

### Requirements

- Use both `filter()` and `map()`.
- Return `"Invalid"` for invalid input.

---

## 🔴 Problem 5 ⭐ Daily Challenge — Inventory Summary

Write a function `inventorySummary(products)`.

### Input

```javascript
[
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Monitor", stock: 5 }
]
```

### Output

```javascript
{
  availableProducts: ["Keyboard", "Monitor"],
  totalStock: 15
}
```

### Requirements

- Use `filter()`
- Use `map()`
- Use `forEach()`
- Return `"Invalid"` for invalid input.

### Empty Array Output

```javascript
{
  availableProducts: [],
  totalStock: 0
}
```

---

# 🎯 Skills Practiced

- ✅ ES6 Arrow Functions
- ✅ map()
- ✅ filter()
- ✅ forEach()
- ✅ Method Chaining
- ✅ Object Arrays
- ✅ Data Transformation
- ✅ Data Filtering
- ✅ Input Validation

---

⭐ **Completed:** JavaScript Problem Solving - Day 10