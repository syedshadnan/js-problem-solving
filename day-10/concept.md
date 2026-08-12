🔥 **Day 10 Started**

# 📚 Concept Class — Array Methods (Part 1)

Aaj amra focus korbo:

* `forEach()`
* `map()`
* `filter()`

Egula React, Node.js, Interview, DSA sob jaygay use hobe.

---

## 1️⃣ forEach()

### Ki?

Array er protita element er upor kaj chalate dey.

### Example

```javascript
const numbers = [1, 2, 3];

numbers.forEach(number => {
  console.log(number);
});
```

Output:

```text
1
2
3
```

### Real World

Products list show kora:

```javascript
products.forEach(product => {
  console.log(product.name);
});
```

### Important

`forEach()` kichu return kore na.

```javascript
const result = numbers.forEach(n => n * 2);

console.log(result);
```

Output:

```javascript
undefined
```

---

## 2️⃣ map()

### Ki?

Protita element transform kore notun array return kore.

### Example

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```javascript
[2, 4, 6]
```

### Real World

User names extract:

```javascript
const users = [
  { name: "Ifty" },
  { name: "John" }
];

const names = users.map(user => user.name);
```

Output:

```javascript
["Ifty", "John"]
```

### React Connection

React e list render korar somoy `map()` shobcheye beshi use hoy.

```jsx
users.map(user => (
  <li>{user.name}</li>
))
```

---

## 3️⃣ filter()

### Ki?

Condition satisfy korle rakhe, na korle bad dey.

### Example

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(
  number => number % 2 === 0
);

console.log(evenNumbers);
```

Output:

```javascript
[2, 4, 6]
```

### Real World

Passed students:

```javascript
students.filter(
  student => student.marks >= 40
);
```

---

# 🧠 Difference

| Method    | Return    |
| --------- | --------- |
| forEach() | undefined |
| map()     | New Array |
| filter()  | New Array |

---

# ✅ Concept Verification

Answer without running code.

### Q1

Why do we use `map()` instead of `forEach()`?

### Q2

Which method returns only elements matching a condition?

### Q3

What will this return?

```javascript
[1, 2, 3].map(num => num + 1);
```

### Q4

What will this return?

```javascript
[1, 2, 3, 4]
.filter(num => num > 2);
```

---

# 🎯 Mini Quiz

### Quiz 1

Output?

```javascript
const result =
[10, 20, 30]
.map(num => num / 10);

console.log(result);
```

### Quiz 2

Output?

```javascript
const result =
[1, 2, 3, 4]
.filter(num => num % 2);

console.log(result);
```

### Quiz 3

True or False?

`forEach()` always returns a new array.

---

# 💼 Interview Questions

1. Difference between `map()` and `forEach()`?
2. When would you use `filter()`?
3. Can `map()` change the original array?
4. Why is `map()` heavily used in React?

---

