# 🚀 Day 14 — Array Modification & Copying

আজকের Day 14 শুরু করছি তোমার **finalized plan** অনুযায়ী:

### 🎯 Today's Topics

* `slice()`
* `splice()`
* Array Copying
* Array Modification
* Mutating vs Non-Mutating Methods

Day 13-তে তুমি সবচেয়ে গুরুত্বপূর্ণভাবে শিখেছো যে `sort()` original array mutate করে। আজকের lesson সেই ধারণাটাকে আরও গভীর করবে। 

---

# Step 1 — Concept Class

## 1. `slice()` কী?

`slice()` array-এর **একটা অংশ কেটে নিয়ে নতুন array তৈরি করে**।

সবচেয়ে গুরুত্বপূর্ণ:

> `slice()` original array mutate করে না।

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(numbers);
// [10, 20, 30, 40, 50]
```

### Syntax

```js
array.slice(start, end)
```

`end` index টি **include হয় না**।

```js
const arr = [10, 20, 30, 40, 50];

arr.slice(1, 4);
// [20, 30, 40]
```

Index:

```text
  0   1   2   3   4
[10, 20, 30, 40, 50]
     ↑       ↑
   start    end
```

---

## 2. `slice()` দিয়ে Copy করা

এটা খুব গুরুত্বপূর্ণ।

```js
const numbers = [1, 2, 3, 4];

const copy = numbers.slice();
```

এখন:

```js
copy !== numbers
```

কিন্তু values একই।

```js
console.log(copy);
// [1, 2, 3, 4]
```

এটা spread operator-এর মতো:

```js
const copy1 = [...numbers];
const copy2 = numbers.slice();
```

দুটোতেই নতুন array তৈরি হয়।

---

# 3. `splice()` কী?

`splice()` array-এর **ভেতরের element remove, add অথবা replace** করতে পারে।

এবং সবচেয়ে গুরুত্বপূর্ণ:

> `splice()` original array **mutate করে**।

```js
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log(numbers);
// [10, 40]
```

এখানে:

```js
splice(1, 2)
```

মানে:

```text
start index = 1
delete count = 2
```

অর্থাৎ:

```text
[10, 20, 30, 40]
     ↑   ↑
    remove
```

---

# 4. `splice()` দিয়ে Add করা

```js
const numbers = [10, 20, 40];

numbers.splice(2, 0, 30);

console.log(numbers);
// [10, 20, 30, 40]
```

এখানে:

```js
splice(2, 0, 30)
```

মানে:

```text
2 → কোথা থেকে শুরু
0 → কিছু delete করো না
30 → এখানে insert করো
```

---

# 5. `splice()` দিয়ে Replace করা

```js
const numbers = [10, 20, 30];

numbers.splice(1, 1, 99);

console.log(numbers);
// [10, 99, 30]
```

মানে:

```text
index 1 থেকে
1টা element delete
তার জায়গায় 99 বসাও
```

---

# 6. `slice()` vs `splice()`

এটা আজকের সবচেয়ে গুরুত্বপূর্ণ comparison:

|                              | `slice()` | `splice()` |
| ---------------------------- | --------- | ---------- |
| Original array পরিবর্তন করে? | ❌ না      | ✅ হ্যাঁ    |
| নতুন array return করে?       | ✅ হ্যাঁ   | ✅ হ্যাঁ    |
| Array থেকে অংশ নেওয়া         | ✅         | ⚠️ সম্ভব   |
| Remove করা                   | ❌         | ✅          |
| Add করা                      | ❌         | ✅          |
| Replace করা                  | ❌         | ✅          |

সহজভাবে মনে রাখো:

> **slice = take a piece**
> **splice = modify the array**

---

# 7. Mutation vs Non-Mutation

Day 13-তে `sort()` দেখেছো:

```js
const arr = [3, 1, 2];

arr.sort((a, b) => a - b);

console.log(arr);
// [1, 2, 3]
```

Original array changed.

আজ:

```js
arr.slice()
```

এর বিপরীত behavior:

```js
const arr = [1, 2, 3];

const result = arr.slice(1);

console.log(arr);
// [1, 2, 3]

console.log(result);
// [2, 3]
```

কিন্তু:

```js
arr.splice(1, 1);
```

original array change করবে।

---

# 8. React-এর সাথে Connection

তুমি এখনো React শেখার পর্যায়ে যাওনি, কিন্তু future-এর জন্য এই distinction খুব important।

ধরো:

```js
const users = ["John", "Alice", "Bob"];
```

Direct mutation:

```js
users.splice(1, 1);
```

এখানে original data পরিবর্তন হয়ে গেল।

Non-mutating approach:

```js
const updatedUsers = [
  ...users.slice(0, 1),
  ...users.slice(2)
];
```

এখানে নতুন array তৈরি হচ্ছে।

React state-এর ক্ষেত্রে এই immutable approach অনেক গুরুত্বপূর্ণ হবে।

---

# 🧠 Quick Mental Model

### `slice()`

> "আমাকে একটা অংশের **copy** দাও।"

```js
const part = arr.slice(1, 3);
```

### `splice()`

> "এই original array-টা **modify** করো।"

```js
arr.splice(1, 2);
```

---

# ⚠️ Common Mistakes

### Mistake 1

ভাবা:

```js
slice()
```

original array পরিবর্তন করে।

❌ না।

---

### Mistake 2

ভাবা:

```js
splice()
```

safe/non-mutating।

❌ না।

`splice()` original array mutate করে।

---

### Mistake 3

`slice()`-এর end index include করা।

```js
[1, 2, 3, 4, 5].slice(1, 4)
```

Result:

```js
[2, 3, 4]
```

`5` না।

---

# 🎯 Step 2 — Concept Verification

এখন code লেখার আগে নিজের ভাষায় উত্তর দাও:

### 1.

`slice()` আর `splice()`-এর সবচেয়ে গুরুত্বপূর্ণ difference কী?

### 2.

এই code-এর output কী হবে?

```js
const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(result);
console.log(arr);
```

### 3.

এই code-এর output কী হবে?

```js
const arr = [10, 20, 30, 40, 50];

const result = arr.splice(1, 2);

console.log(result);
console.log(arr);
```

### 4.

`slice()` কীভাবে array copy করার কাজে ব্যবহার করা যায়?

### 5.

কোনটা mutation করবে?

```js
const a = [1, 2, 3];

const b = a.slice(1);
```

নাকি

```js
const a = [1, 2, 3];

const b = a.splice(1, 1);
```

**এখন Step 2-এর উত্তর দাও। তারপর আমরা Mini Quiz → Interview Questions → Day 14 Problems-এ যাব।**
