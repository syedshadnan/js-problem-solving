// 🟠 Problem 4 — Are All Products In Stock

const allProductsInStock = products => {
    if (!Array.isArray(products)){
        return 'Invalid'
    }
    if (products.some(product => Array.isArray(product) || typeof product !== 'object' || product === null || typeof product.name !== 'string' || product.name.trim().length === 0 || !Number.isFinite(product.stock))){
        return 'Invalid'
    }
    return products.length > 0 && products.every(product => product.stock > 0) 
}


console.log(allProductsInStock([
  { name: "keyboard", stock: 5 },
  { name: "Mouse", stock: 10 },
  { name: "Monitor", stock: 3 }
]))

console.log(allProductsInStock([]))


const test = []
const testing = test.some(x => x>0)
console.log(testing)

const test = []
const testing = test.every(x => x>0)
console.log(testing)