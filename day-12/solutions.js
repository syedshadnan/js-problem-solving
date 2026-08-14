// 🟢 Problem 1 — Sum All Numbers
const sumNumbers = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number))){
        return 'Invalid'
    }
    return numbers.reduce((acc,current) => acc + current, 0)
}

// 🟢 Problem 2 — Total Product Stock
const totalStock = products => {
    if (!Array.isArray(products)){
        return 'Invalid'
    }
    if (products.some(product => Array.isArray(product) || typeof product !== 'object' || product === null || typeof product.name !== 'string' || product.name.trim().length === 0 || !Number.isFinite(product.stock))){
        return 'Invalid'
    }
    return products.reduce((acc,current) => acc + current.stock, 0)
}

// 🟡 Problem 3 — Total Cart Price
const cartTotal = cart => {
    if (!Array.isArray(cart)){
        return 'Invalid'
    }
    if (cart.some(item => Array.isArray(item) || typeof item !== 'object' || item === null || typeof item.name !== 'string' || item.name.trim().length === 0 || !Number.isFinite(item.price) || item.price < 0)){
        return 'Invalid'
    }
    return cart.reduce((acc,current)=> acc + current.price, 0)
}

// 🟠 Problem 4 — Average Marks
const averageMarks = students => {
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    if (students.length === 0){
        return 0;
    }
    
    if (students.some(student => Array.isArray(student) || typeof student !== 'object' || student === null || typeof student.name !== 'string' || student.name.trim().length === 0 || !Number.isFinite(student.marks) || student.marks < 0)){
        return 'Invalid'
    }
    return students.reduce((acc,current)=> acc + current.marks , 0) / students.length;
}

// 🔴 Problem 5 ⭐ Daily Challenge — Sales Report
const salesReport = (orders) => {
  // validation starts here
  if (!Array.isArray(orders)) {
    return "Invalid";
  }
  if (
    orders.some(
      (order) =>
        Array.isArray(order) ||
        typeof order !== "object" ||
        order === null ||
        !Number.isFinite(order.id) ||
        order.id < 0 ||
        typeof order.customer !== "string" ||
        order.customer.trim().length === 0 ||
        !Number.isFinite(order.amount) ||
        order.amount < 0 ||
        typeof order.paid !== "boolean",
    )
  ) {
    return "Invalid";
  }
  //   validations ends here
  const totalSales = orders.reduce((acc, current) => acc + current.amount, 0);

  const paidSales = orders
    .filter((order) => order.paid)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const unpaidSales = orders
    .filter((order) => !order.paid)
    .reduce((acc, curr) => acc + curr.amount, 0);

  let paidOrders = 0;
  let unpaidOrders = 0;
  orders.forEach((order) => {
    if (order.paid) {
      paidOrders++;
    } else {
      unpaidOrders++;
    }
  });

  return {
    totalSales,
    paidSales,
    unpaidSales,
    paidOrders,
    unpaidOrders,
  };
};
