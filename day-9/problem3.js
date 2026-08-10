// 🟡 Problem 3 — Find Product By ID

const findProduct = (products, id) => {
  if (!Array.isArray(products)) {
    return "Invalid";
  }
  for (const elem of products) {
    if (typeof elem !== 'object' || elem === null || !Number.isFinite(elem.id) || typeof elem.name !== "string") {
      return "Invalid";
    }
    
  }
  const productById = products.find(product => product.id === id);

        return productById ?? null
};

console.log(
  findProduct(
    [
      { id: 1, name: "Keyboard" },
      { id: 2, name: "Mouse" },
      { id: 3, name: "Monitor" },
    ],
    20,
  ),
);

// { id: 2, name: "Mouse" }
