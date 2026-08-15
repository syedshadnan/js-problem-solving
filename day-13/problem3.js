// 🟡 Problem 3 — Sort Product Prices

const sortProductsByPrice = products => {
    if (!Array.isArray(products)){
        return 'Invalid'
    }
    if (products.some(product => Array.isArray(product) || typeof product !== 'object' || product === null || typeof product.name !== 'string' || product.name.trim().length === 0 || !Number.isFinite(product.price) || product.price < 0)){
        return 'Invalid'
    }
    return [...products].sort((a, b)=> a.price - b.price)
}


console.log(sortProductsByPrice([
  { name: "Keyboard", price: 2000 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 12000 }
]));