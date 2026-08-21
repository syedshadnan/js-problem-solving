# 📅 Day 14 — Array Copying & Modification

> 🎯 `slice()` • `splice()` • Array Copying • Mutation vs Non-Mutation

---

## 🟢 Problem 1 — Extract a Range

Write a function `extractRange(numbers, start, end)`.

Return a **new array** containing elements from `start` up to, but not including, `end`.

### Example

```javascript
extractRange([10, 20, 30, 40, 50], 1, 4);

// [20, 30, 40]
````

### Requirements

* `numbers` must be an array.
* All elements must be finite numbers.
* `start` and `end` must be integers.
* `start` must be greater than or equal to `0`.
* `end` must be greater than or equal to `start`.
* Do not mutate the original array.
* Return `"Invalid"` for invalid input.

---

## 🟢 Problem 2 — Remove Element

Write a function `removeElement(numbers, index)`.

Remove **one element** from the given index and return the resulting array.

### Example

```javascript
removeElement([10, 20, 30, 40], 2);

// [10, 20, 40]
```

### Requirements

* Use `splice()`.
* Do not mutate the original array.
* `numbers` must be an array.
* All elements must be finite numbers.
* `index` must be a valid integer index.
* Return `"Invalid"` for invalid input.

> 💡 Hint: Since `splice()` mutates the array, create a copy first.

---

## 🟡 Problem 3 — Insert Element

Write a function `insertElement(numbers, index, value)`.

Insert `value` at the given index and return a **new array**.

### Example

```javascript
insertElement([10, 20, 40, 50], 2, 30);

// [10, 20, 30, 40, 50]
```

### Requirements

* Use `splice()`.
* Do not mutate the original array.
* `numbers` must be an array.
* All existing elements must be finite numbers.
* `value` must be a finite number.
* `index` must be a valid integer insertion index.
* An index equal to `numbers.length` is valid.
* Return `"Invalid"` for invalid input.

---

## 🟠 Problem 4 — Replace Range

Write a function `replaceRange(numbers, start, deleteCount, ...values)`.

Remove `deleteCount` elements starting from `start` and insert the new values in their place.

### Example

```javascript
replaceRange(
  [10, 20, 30, 40, 50],
  1,
  2,
  200,
  300
);

// [10, 200, 300, 40, 50]
```

### Requirements

* Use `splice()`.
* Do not mutate the original array.
* `numbers` must be an array.
* All existing elements must be finite numbers.
* `start` must be a non-negative integer.
* `deleteCount` must be a non-negative integer.
* All replacement values must be finite numbers.
* Return `"Invalid"` for invalid input.

---

## 🔴 Problem 5 ⭐ Daily Challenge — Safe Array Editor

Write a function:

```javascript
editArray(numbers, operation)
```

The `operation` object can describe one of three operations.

### Remove

```javascript
{
  type: "remove",
  index: 2
}
```

### Insert

```javascript
{
  type: "insert",
  index: 2,
  value: 99
}
```

### Replace

```javascript
{
  type: "replace",
  index: 1,
  value: 100
}
```

### Example — Remove

```javascript
editArray(
  [10, 20, 30, 40],
  {
    type: "remove",
    index: 2
  }
);

// [10, 20, 40]
```

### Example — Insert

```javascript
editArray(
  [10, 20, 30, 40],
  {
    type: "insert",
    index: 2,
    value: 99
  }
);

// [10, 20, 99, 30, 40]
```

### Example — Replace

```javascript
editArray(
  [10, 20, 30, 40],
  {
    type: "replace",
    index: 1,
    value: 100
  }
);

// [10, 100, 30, 40]
```

### Requirements

* Use `slice()` and/or `splice()`.
* The original array **must never be mutated**.
* `numbers` must be an array.
* All elements of `numbers` must be finite numbers.
* `operation` must be a valid object.
* `operation.type` must be `"remove"`, `"insert"`, or `"replace"`.
* `operation.index` must be a non-negative integer.
* For `remove` and `replace`, `index` must refer to an existing element.
* For `insert`, `index` may equal `numbers.length`.
* `value` is required for `insert` and `replace`.
* `value` must be a finite number.
* Return `"Invalid"` for invalid input.

### Edge Cases

```javascript
editArray([], {
  type: "insert",
  index: 0,
  value: 10
});

// [10]
```

```javascript
editArray([], {
  type: "remove",
  index: 0
});

// "Invalid"
```

```javascript
editArray([10, 20, 30], {
  type: "insert",
  index: 3,
  value: 40
});

// [10, 20, 30, 40]
```

---

# 🎯 Skills Practiced

* ✅ `slice()`
* ✅ `splice()`
* ✅ Array Copying
* ✅ Array Modification
* ✅ Mutating vs Non-Mutating Methods
* ✅ Spread Operator
* ✅ Rest Parameters
* ✅ Input Validation
* ✅ Edge Case Handling
* ✅ Safe Mutation
* ✅ Problem Solving

---

## 🧠 Key Concepts

### `slice()`

* Returns a new array.
* Does not mutate the original array.
* Can copy the entire array or extract a portion.

### `splice()`

* Mutates the original array.
* Can remove elements.
* Can insert elements.
* Can replace elements.
* Returns the removed elements.

### Safe Mutation Pattern

```javascript
const copy = [...original];

copy.splice(...);

return copy;
```

---

⭐ **Day 14 Focus:** Understand when an array is being copied, when it is being mutated, and how to safely use mutating methods.

```

This matches the problems you actually solved today and the Day 14 focus we established. The progression also follows your project’s emphasis on ES6 array methods and problem-solving rather than jumping ahead to Objects. :contentReference[oaicite:0]{index=0}
```
