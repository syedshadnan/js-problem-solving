# 📅 Day 12

> 🎯 ES6 Array Method — reduce()

---

## 🟢 Problem 1 — Sum All Numbers

Write a function:

```javascript
sumNumbers(numbers)
```

Return the sum of all numbers in the array.

### Example

```javascript
sumNumbers([10, 20, 30]);

// 60
```

### Requirements

- Use `reduce()`
- Input must be an array
- All elements must be finite numbers
- Return `"Invalid"` for invalid input

---

## 🟢 Problem 2 — Total Product Stock

Write a function:

```javascript
totalStock(products)
```

Each product:

```javascript
{
  name: "Keyboard",
  stock: 10
}
```

Return the total stock.

### Example

```javascript
totalStock([
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 5 }
]);

// 15
```

### Requirements

- Use `reduce()`
- Input must be an array
- Every product must contain:
  - `name` (non-empty string)
  - `stock` (finite number)
- Return `"Invalid"` for invalid input

---

## 🟡 Problem 3 — Total Cart Price

Write a function:

```javascript
cartTotal(cart)
```

Each cart item:

```javascript
{
  name: "Laptop",
  price: 50000
}
```

Return the total cart value.

### Example

```javascript
cartTotal([
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 }
]);

// 51000
```

### Requirements

- Use `reduce()`
- Input must be an array
- Every item must contain:
  - `name` (non-empty string)
  - `price` (finite number)
- Price cannot be negative
- Return `"Invalid"` for invalid input

---

## 🟠 Problem 4 — Average Marks

Write a function:

```javascript
averageMarks(students)
```

Each student:

```javascript
{
  name: "John",
  marks: 80
}
```

Return the average marks.

### Example

```javascript
averageMarks([
  { name: "John", marks: 80 },
  { name: "Alice", marks: 60 }
]);

// 70
```

### Requirements

- Use `reduce()`
- Input must be an array
- Every student must contain:
  - `name` (non-empty string)
  - `marks` (finite number)
- Marks cannot be negative
- Return `0` for an empty array
- Return `"Invalid"` for invalid input

---

## 🔴 Problem 5 ⭐ Daily Challenge — Sales Report

Write a function:

```javascript
salesReport(orders)
```

Each order:

```javascript
{
  id: 1,
  customer: "John",
  amount: 500,
  paid: true
}
```

### Example Input

```javascript
[
  {
    id: 1,
    customer: "John",
    amount: 500,
    paid: true
  },
  {
    id: 2,
    customer: "Alice",
    amount: 700,
    paid: false
  },
  {
    id: 3,
    customer: "Bob",
    amount: 300,
    paid: true
  }
]
```

### Expected Output

```javascript
{
  totalSales: 1500,
  paidSales: 800,
  unpaidSales: 700,
  paidOrders: 2,
  unpaidOrders: 1
}
```

### Requirements

- Use `reduce()`
- Use `some()`
- Use `every()`
- Input must be an array
- Every order must contain:
  - `id` (finite number)
  - `customer` (non-empty string)
  - `amount` (finite number, ≥ 0)
  - `paid` (boolean)
- Return `"Invalid"` for invalid input

### Empty Array Output

```javascript
{
  totalSales: 0,
  paidSales: 0,
  unpaidSales: 0,
  paidOrders: 0,
  unpaidOrders: 0
}
```

---

# 🎯 Skills Practiced

- ✅ reduce()
- ✅ Accumulator
- ✅ Initial Value
- ✅ Data Aggregation
- ✅ Sum Calculation
- ✅ Average Calculation
- ✅ Object Validation
- ✅ Array Validation
- ✅ Report Generation
- ✅ ES6 Array Methods

---

⭐ Completed: JavaScript Problem Solving - Day 12