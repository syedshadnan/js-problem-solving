# Day 10 — ES6 Array Methods

## Topics Learned

- map()
- filter()
- forEach()
- Method Chaining
- Processing Arrays of Objects
- Data Transformation
- Data Filtering

---

## Problems Solved

1. Double Numbers
2. Get Adult Users
3. Extract Product Names
4. Passed Students Report
5. Inventory Summary

---

## Key Learnings

### map()

- Creates a new array.
- Used to transform data.
- Does not modify the original array.

Example:

```javascript
numbers.map(number => number * 2);
```

### filter()

- Returns only matching elements.
- Used for data filtering.

Example:

```javascript
users.filter(user => user.age >= 18);
```

### forEach()

- Iterates through every element.
- Does not return a new array.
- Useful for aggregation and side effects.

Example:

```javascript
products.forEach(product => {
  total += product.stock;
});
```

### Method Chaining

```javascript
students
  .filter(student => student.marks >= 40)
  .map(student => student.name);
```

---

## Mistakes Found

### Mistake 1

Initially thought:

```javascript
map()
```

modifies the original array.

Correction:

```javascript
map()
```

returns a new array and leaves the original array unchanged.

---

### Mistake 2

Wrong output prediction:

```javascript
[1,2,3,4].filter(num => num % 2)
```

Predicted:

```javascript
[2,4]
```

Correct:

```javascript
[1,3]
```

Reason:

- 1 and 3 produce truthy values.
- 2 and 4 produce falsy values.

---

## Strengths

- Strong validation mindset.
- Comfortable using map() and filter().
- Good handling of object arrays.
- Clean ES6 syntax.

---

## Revision Needed

- Truthy vs Falsy
- Array Method Return Values
- Non-Mutating Array Methods

---

## Day Score

9.6 / 10

---

## Ready For

Day 11

Topics:

- find()
- findIndex()
- some()
- every()