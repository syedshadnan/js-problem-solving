// 🔴 Problem 5 ⭐ Daily Challenge — Inventory Summary

const inventorySummary = products => {
    if (!Array.isArray(products)){
        return 'Invalid'
    }
    for (const product of products){
        if(typeof product !== 'object' || product === null || typeof product.name !== 'string' || product.name.trim().length === 0 || !Number.isFinite(product.stock)){
            return 'Invalid'
        }
    }
    const availableProducts =  products.filter(product => product.stock > 0).map(product => product.name)
    
    let totalStock = 0;
    products.forEach(product => {
        totalStock+=product.stock;
    })
    return {
        availableProducts,
        totalStock
    }
}



console.log(inventorySummary(
    [
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Monitor", stock: 5 }
]
))