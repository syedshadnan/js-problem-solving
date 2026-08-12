# 📅 Day 11 — ES6 Array Search Methods

> 🎯 Topic: `find()`, `findIndex()`, `some()`, `every()`

তুমি Day 10-এ `map()`, `filter()`, `forEach()` শেষ করেছো। আজ আমরা এমন কিছু methods শিখব যেগুলো React, Node.js, API data processing, interview এবং real-world applications-এ খুব বেশি ব্যবহৃত হয়। 

---

# Step 1 — Concept Class

## 1. find()

### What is it?

একটি array থেকে **প্রথম matching element** খুঁজে বের করে।

```javascript
const users = [
  { name: "John", age: 20 },
  { name: "Alice", age: 25 }
];

const result = users.find(user => user.age > 22);

console.log(result);
```

Output:

```javascript
{ name: "Alice", age: 25 }
```

---

### Why do we use it?

ধরো একটি e-commerce site এ product id দিয়ে product খুঁজতে হবে।

পুরোনো উপায়:

```javascript
for (let product of products) {
  if (product.id === id) {
    return product;
  }
}
```

ES6:

```javascript
products.find(product => product.id === id);
```

অনেক cleaner।

---

### Important

যদি কিছু না পায়:

```javascript
undefined
```

return করবে।

---

## 2. findIndex()

### What is it?

Matching element-এর **index** return করে।

```javascript
const numbers = [10, 20, 30, 40];

const index = numbers.findIndex(
  num => num === 30
);

console.log(index);
```

Output:

```javascript
2
```

---

### If not found?

```javascript
-1
```

return করবে।

---

### Real World Example

Shopping cart থেকে item remove করতে।

```javascript
const index = cart.findIndex(
  item => item.id === 5
);
```

---

## 3. some()

### What is it?

Check করে:

> অন্তত একটি element condition satisfy করে কি না।

Return:

```javascript
true
```

or

```javascript
false
```

---

Example:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.some(
  num => num > 3
);

console.log(result);
```

Output:

```javascript
true
```

---

Another Example:

```javascript
const numbers = [1, 2, 3];

numbers.some(num => num > 10);
```

Output:

```javascript
false
```

---

### Real World Example

User list এ কোনো admin আছে কি?

```javascript
users.some(
  user => user.role === "admin"
);
```

---

## 4. every()

### What is it?

Check করে:

> সব element condition satisfy করছে কি না।

---

Example:

```javascript
const numbers = [2, 4, 6];

numbers.every(
  num => num % 2 === 0
);
```

Output:

```javascript
true
```

---

Example:

```javascript
const numbers = [2, 4, 5];

numbers.every(
  num => num % 2 === 0
);
```

Output:

```javascript
false
```

---

### Real World Example

সব student pass করেছে কি?

```javascript
students.every(
  student => student.marks >= 40
);
```

---

# Quick Comparison

| Method      | Returns |
| ----------- | ------- |
| find()      | Element |
| findIndex() | Index   |
| some()      | Boolean |
| every()     | Boolean |

---

# React Connection

React-এ তুমি এগুলো প্রচুর ব্যবহার করবে।

Example:

```javascript
users.find(user => user.id === id);
```

```javascript
products.some(product => product.stock === 0);
```

```javascript
students.every(student => student.paid);
```

এগুলো React state management, filtering, searching এবং rendering-এ খুব common।

---

# Step 2 — Concept Verification

Full answer না দেখে নিজে উত্তর দাও:

### Q1

`find()` না পেলে কী return করে?

### Q2

`findIndex()` না পেলে কী return করে?

### Q3

`some()` কয়টা matching element পেলেই `true` হবে?

### Q4

`every()` কখন `true` return করবে?

### Q5

কোন method element return করে?

* A. some()
* B. every()
* C. find()
* D. findIndex()

---

# Step 3 — Mini Quiz

### Quiz 1

Output কী?

```javascript
[1, 2, 3, 4].find(
  num => num > 2
);
```

---

### Quiz 2

Output কী?

```javascript
[10, 20, 30].findIndex(
  num => num === 50
);
```

---

### Quiz 3

Output কী?

```javascript
[5, 10, 15].some(
  num => num > 12
);
```

---

### Quiz 4

Output কী?

```javascript
[2, 4, 6].every(
  num => num % 2 === 0
);
```

---

# Step 4 — Beginner Interview Questions

1. `find()` এবং `filter()` এর মধ্যে পার্থক্য কী?

2. `some()` এবং `every()` এর মধ্যে পার্থক্য কী?

3. `findIndex()` কোথায় ব্যবহার করা হয়?

4. `find()` কেন `undefined` return করতে পারে?

5. Real-world application এ `some()` কোথায় ব্যবহার করতে পারো?

---


