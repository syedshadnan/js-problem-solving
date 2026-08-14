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

console.log(cartTotal(
    [
  { name: "Laptop", price: -50000 },
  { name: "Mouse", price: 1000 }
]
))