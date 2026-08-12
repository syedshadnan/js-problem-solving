// 🟡 Problem 3 — Extract Product Names

const getProductNames = (products) => {
    if (!Array.isArray(products)){
        return 'Invalid'
    }
    for (const product of products){
        if (typeof product !== 'object' || product === null || !Number.isFinite(product.id) || typeof product.name !== 'string' || product.name.trim().length === 0){
            return 'Invalid'
        }
    }
    return products.map(product => product.name);
}

console.log(getProductNames(
    [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" }
]
))