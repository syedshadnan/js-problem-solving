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

const orders = [
  {
    id: 1,
    customer: "John",
    amount: 500,
    paid: true,
  },
  {
    id: 2,
    customer: "Alice",
    amount: 700,
    paid: false,
  },
  {
    id: 3,
    customer: "Bob",
    amount: 300,
    paid: true,
  },
];
console.log(salesReport(orders));

