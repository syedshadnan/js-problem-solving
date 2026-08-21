# Day 14 — Array Copying & Modification

## Topics Learned

- slice()
- splice()
- Array Copying
- Array Modification
- Mutating vs Non-Mutating Methods
- Safe Mutation
- Spread Operator
- Rest Parameters

---

## Problems Solved

1. Extract a Range
2. Remove Element
3. Insert Element
4. Replace Range
5. Safe Array Editor

---

## Key Learnings

### slice()

- `slice()` returns a new array.
- `slice()` does not mutate the original array.
- `slice()` can extract a portion of an array.
- `slice()` can also be used to create a shallow copy of an array.
- The `end` index is not included.

Example:

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

// result → [20, 30, 40]
// numbers → [10, 20, 30, 40, 50]