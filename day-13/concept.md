# 🚀 Day 13 — ES6 Array Method: `sort()`

According to your roadmap, today's focus is **`sort()` and Data Ordering**.

---

# Step 1 — Concept Class

## What is `sort()`?

`sort()` is an array method used to arrange elements in a specific order.

Think of it like arranging exam marks from lowest to highest or students alphabetically.

```javascript
const numbers = [5, 2, 8, 1];

numbers.sort();

console.log(numbers);
```

Output:

```javascript
[1, 2, 5, 8]
```

Looks good, right?

Not always.

---

## The Biggest Beginner Trap

Consider:

```javascript
const numbers = [100, 5, 20, 1];

numbers.sort();

console.log(numbers);
```

Output:

```javascript
[1, 100, 20, 5]
```

😱 Wrong!

Why?

Because JavaScript converts values to strings by default.

It compares:

```javascript
"100"
"20"
"5"
```

alphabetically instead of numerically.

---

## Numeric Sorting

To sort numbers properly:

```javascript
numbers.sort((a, b) => a - b);
```

Example:

```javascript
const numbers = [100, 5, 20, 1];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```javascript
[1, 5, 20, 100]
```

---

## Understanding `a - b`

Imagine:

```javascript
a = 5
b = 20
```

```javascript
a - b
```

Result:

```javascript
-15
```

Negative value means:

```javascript
5 comes before 20
```

Now:

```javascript
a = 20
b = 5
```

```javascript
20 - 5
```

Result:

```javascript
15
```

Positive value means:

```javascript
20 comes after 5
```

---

## Ascending Order

Small → Large

```javascript
numbers.sort((a, b) => a - b);
```

Result:

```javascript
[1, 5, 20, 100]
```

---

## Descending Order

Large → Small

```javascript
numbers.sort((a, b) => b - a);
```

Result:

```javascript
[100, 20, 5, 1]
```

---

# Sorting Strings

## Alphabetical Order

```javascript
const names = ["John", "Alice", "Bob"];

names.sort();

console.log(names);
```

Output:

```javascript
["Alice", "Bob", "John"]
```

---

# Sorting Objects

Very common in React and real-world apps.

Example:

```javascript
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 40 }
];
```

Sort by age:

```javascript
users.sort((a, b) => a.age - b.age);
```

Output:

```javascript
[
  { name: "Alice", age: 22 },
  { name: "John", age: 30 },
  { name: "Bob", age: 40 }
]
```

---

# Important: sort() Mutates

Unlike:

```javascript
map()
filter()
reduce()
```

`sort()` changes the original array.

Example:

```javascript
const numbers = [3, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Original array becomes:

```javascript
[1, 2, 3]
```

---

## Avoid Mutation

```javascript
const sorted = [...numbers].sort((a, b) => a - b);
```

The spread operator creates a copy first.

This is extremely important in React.

---

# Real-World Uses

### E-commerce

Sort products by:

* Price
* Rating
* Popularity

### Student Portal

Sort students by:

* Marks
* GPA
* Attendance

### Social Media

Sort posts by:

* Likes
* Comments
* Newest First

### Dashboard Analytics

Sort reports by:

* Revenue
* Sales
* Performance

---

# Common Mistakes

### Mistake 1

```javascript
numbers.sort();
```

for numeric arrays.

❌ Wrong

---

### Mistake 2

Forgetting mutation.

```javascript
sort()
```

changes the original array.

---

### Mistake 3

Using:

```javascript
a > b
```

inside sort callback.

Use:

```javascript
a - b
```

for numbers.

---

# React Connection

You'll often see:

```javascript
const sortedUsers = [...users].sort(
  (a, b) => b.score - a.score
);
```

React prefers immutable updates.

That's why we copy first.

---

# Step 2 — Concept Verification

Answer these without running code:

### Q1

What problem does `sort()` solve?

### Q2

Why is this wrong for numbers?

```javascript
[100, 5, 20, 1].sort();
```

### Q3

Which one gives ascending order?

A.

```javascript
(a, b) => a - b
```

B.

```javascript
(a, b) => b - a
```

### Q4

Does `sort()` mutate the original array?

### Q5

Why is this preferred in React?

```javascript
[...users].sort(...)
```

Reply with:

**Q1:** ...
**Q2:** ...
**Q3:** ...
**Q4:** ...
**Q5:** ...

After that, we'll do the mini quiz and then move to Day 13 problems.
