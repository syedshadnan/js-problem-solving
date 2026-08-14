# 📅 Day 12 — ES6 `reduce()`

> 🎯 Topic: `reduce()` — One of the most important array methods in modern JavaScript.

তুমি ইতিমধ্যে শিখেছো:

* `map()` → transform data
* `filter()` → filter data
* `find()` → find one item
* `some()` → at least one match
* `every()` → all match

আজ আমরা শিখব:

> **কীভাবে পুরো array-কে একটি single value-এ reduce করা যায়।**

এটা Phase 2 (Modern JavaScript ES6+) এর Array Methods progression-এর অংশ।

---

# Step 1 — Concept Class

## What is reduce()?

`reduce()` array-এর সব element নিয়ে কাজ করে এবং শেষে **একটি final value** return করে।

Example:

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce(
  (accumulator, currentValue) =>
    accumulator + currentValue,
  0
);

console.log(total);
```

Output:

```javascript
60
```

---

## Why does reduce exist?

ধরো তোমার কাছে আছে:

```javascript
[10, 20, 30, 40]
```

তুমি total বের করতে চাও।

পুরোনো উপায়:

```javascript
let sum = 0;

for (const number of numbers) {
  sum += number;
}
```

ES6:

```javascript
numbers.reduce(
  (acc, num) => acc + num,
  0
);
```

কম code, বেশি expressive।

---

# Understanding the Parameters

```javascript
array.reduce(
  (accumulator, currentValue) => {},
  initialValue
);
```

---

### accumulator

এটা running result।

---

### currentValue

বর্তমান element।

---

### initialValue

শুরুতে accumulator-এর value।

---

Example:

```javascript
[1, 2, 3]
```

with:

```javascript
.reduce(
  (acc, num) => acc + num,
  0
);
```

---

Iteration 1

```javascript
acc = 0
num = 1

result = 1
```

---

Iteration 2

```javascript
acc = 1
num = 2

result = 3
```

---

Iteration 3

```javascript
acc = 3
num = 3

result = 6
```

Final:

```javascript
6
```

---

# Real World Example 1 — Total Revenue

```javascript
const orders = [
  { amount: 100 },
  { amount: 200 },
  { amount: 300 }
];

const revenue = orders.reduce(
  (acc, order) => acc + order.amount,
  0
);
```

Output:

```javascript
600
```

---

# Real World Example 2 — Total Stock

```javascript
const products = [
  { stock: 10 },
  { stock: 5 },
  { stock: 20 }
];

const totalStock = products.reduce(
  (acc, product) =>
    acc + product.stock,
  0
);
```

Output:

```javascript
35
```

---

# Real World Example 3 — Frequency Counter

```javascript
const text = "hello";
```

Using reduce:

```javascript
const frequency = text
  .split("")
  .reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
```

Output:

```javascript
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

# React Connection

তুমি React-এ প্রায়ই দেখবে:

```javascript
cart.reduce(
  (total, item) =>
    total + item.price,
  0
);
```

Shopping cart total বের করার জন্য।

---

# Common Mistakes

### Mistake 1

```javascript
reduce((acc, num) => {
  acc + num;
}, 0);
```

❌

return নেই।

---

### Correct

```javascript
reduce((acc, num) => {
  return acc + num;
}, 0);
```

---

### Mistake 2

Initial value না দেওয়া।

```javascript
reduce(...)
```

এতে empty array-তে error হতে পারে।

---

### Safer

```javascript
reduce(..., 0)
```

---

# Step 2 — Concept Verification

উত্তর দাও:

### Q1

`reduce()` সাধারণত কী return করে?

---

### Q2

এই code-এর output কী?

```javascript
[1, 2, 3].reduce(
  (acc, num) => acc + num,
  0
);
```

---

### Q3

`accumulator` কী?

---

### Q4

`initialValue` কেন ব্যবহার করা হয়?

---

### Q5

`reduce()` ব্যবহার করে কোনটা সবচেয়ে natural?

A. Sum বের করা

B. First element খুঁজে বের করা

C. Array filter করা

D. Array reverse করা

---

# Step 3 — Mini Quiz

### Quiz 1

Output?

```javascript
[5, 10, 15].reduce(
  (acc, num) => acc + num,
  0
);
```

---

### Quiz 2

Output?

```javascript
[2, 3, 4].reduce(
  (acc, num) => acc * num,
  1
);
```

---

### Quiz 3

Output?

```javascript
[].reduce(
  (acc, num) => acc + num,
  0
);
```

---

### Quiz 4

Bug খুঁজে বের করো:

```javascript
const total = [1, 2, 3].reduce(
  (acc, num) => {
    acc + num;
  },
  0
);
```

---

# Step 4 — Interview Questions

1. `reduce()` কী কাজ করে?
2. `map()` আর `reduce()` এর মধ্যে পার্থক্য কী?
3. `reduce()` দিয়ে sum কীভাবে বের করবে?
4. Initial value না দিলে কী সমস্যা হতে পারে?
5. Real-world application এ `reduce()` কোথায় ব্যবহার করা হয়?

প্রথমে Step 2 + Step 3 + Step 4 এর উত্তর দাও। তারপর Day 12 problem set শুরু করব। 🚀


