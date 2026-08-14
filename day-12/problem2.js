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

console.log(totalStock(
    [
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 5 }
]
))
