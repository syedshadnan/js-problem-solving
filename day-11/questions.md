# 📅 Day 11

> 🎯 ES6 Array Search Methods (find, findIndex, some, every)

---

## 🟢 Problem 1 — Find First Negative Number

Write a function `findFirstNegative(numbers)`.

Return the first negative number from the array.

### Example

```javascript
findFirstNegative([5, 10, -3, -7]);

// -3
```

### Requirements

- Use `find()`
- Input must be an array
- All elements must be finite numbers
- Return `null` if no negative number exists
- Return `"Invalid"` for invalid input

---

## 🟢 Problem 2 — Find User Index

Write a function `findUserIndex(users, name)`.

Return the index of the user whose name matches.

### Example

```javascript
findUserIndex(
  [
    { name: "John" },
    { name: "Alice" },
    { name: "Bob" }
  ],
  "Alice"
);

// 1
```

### Requirements

- Use `findIndex()`
- Input must be an array
- Every user must be a valid object
- Return `-1` if not found
- Return `"Invalid"` for invalid input

---

## 🟡 Problem 3 — Has Passing Student

Write a function `hasPassingStudent(students)`.

A student passes if marks ≥ 40.

### Example

```javascript
hasPassingStudent([
  { name: "John", marks: 20 },
  { name: "Alice", marks: 50 }
]);

// true
```

### Requirements

- Use `some()`
- Input must be an array
- Every student must contain:
  - `name` (string)
  - `marks` (finite number)
- Return `"Invalid"` for invalid input

---

## 🟠 Problem 4 — Are All Products In Stock

Write a function `allProductsInStock(products)`.

Each product:

```javascript
{
  name: "Keyboard",
  stock: 5
}
```

Return:

```javascript
true
```

if every product has stock greater than 0.

### Example

```javascript
allProductsInStock([
  { name: "Keyboard", stock: 5 },
  { name: "Mouse", stock: 10 },
  { name: "Monitor", stock: 3 }
]);

// true
```

### Requirements

- Use `every()`
- Input must be an array
- Every product must contain:
  - `name` (string)
  - `stock` (finite number)
- Return `"Invalid"` for invalid input

---

## 🔴 Problem 5 ⭐ Daily Challenge — Course Analyzer

Write a function `analyzeCourses(courses)`.

Each course:

```javascript
{
  id: 1,
  title: "JavaScript",
  enrolled: 120,
  active: true
}
```

### Example Input

```javascript
[
  {
    id: 1,
    title: "JavaScript",
    enrolled: 120,
    active: true
  },
  {
    id: 2,
    title: "React",
    enrolled: 80,
    active: false
  },
  {
    id: 3,
    title: "Node.js",
    enrolled: 150,
    active: true
  }
]
```

### Output

```javascript
{
  activeCourses: ["JavaScript", "Node.js"],
  totalEnrollment: 350,
  hasInactiveCourse: true,
  allCoursesHaveStudents: true,
  mostPopularCourse: "Node.js"
}
```

### Requirements

- Use `some()`
- Use `every()`
- Use `filter()`
- Use `map()`
- Use `forEach()` (or equivalent logic)
- Return `"Invalid"` for invalid input

### Empty Array Output

```javascript
{
  activeCourses: [],
  totalEnrollment: 0,
  hasInactiveCourse: false,
  allCoursesHaveStudents: true,
  mostPopularCourse: undefined
}
```

---

# 🎯 Skills Practiced

- ✅ find()
- ✅ findIndex()
- ✅ some()
- ✅ every()
- ✅ Array Validation
- ✅ Object Validation
- ✅ Array Searching
- ✅ Boolean Checks
- ✅ Data Analysis
- ✅ ES6 Array Methods

---

⭐ **Completed:** JavaScript Problem Solving - Day 11