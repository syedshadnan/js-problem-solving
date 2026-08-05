# 📅 Day 6

## 🟢 Problem 1 — Find Intersection

Write a function `findIntersection(arr1, arr2)` that returns the common unique elements from two arrays.

### Example

findIntersection([1,2,3,4], [3,4,5,6])
// [3,4]

### Requirements

- Input must be two arrays.
- All elements must be finite numbers.
- Return `"Invalid"` for invalid input.
- Return only unique common elements.

---

## 🟢 Problem 2 — Toggle Case

Write a function `toggleCase(str)` that converts:

- Uppercase → Lowercase
- Lowercase → Uppercase

Other characters remain unchanged.

### Example

toggleCase("AbC")
// "aBc"

toggleCase("A1b!")
// "a1B!"

### Requirements

- Input must be a string.
- Return `"Invalid"` for invalid input.

---

## 🟡 Problem 3 — Chunk Array

Write a function `chunkArray(numbers, size)` that divides an array into smaller arrays of the given size.

### Example

chunkArray([1,2,3,4,5],2)
// [[1,2],[3,4],[5]]

chunkArray([1,2,3],1)
// [[1],[2],[3]]

### Requirements

- Input must be an array.
- `size` must be a positive integer.
- Return `"Invalid"` for invalid input.