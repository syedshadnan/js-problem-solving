// 🟢 Problem 1 — Double Numbers
const doubleNumbers = numbers =>{
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    for (const number of numbers){
        if(!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    return numbers.map(number => number * 2)
}

// 🟢 Problem 2 — Get Adult Users
const getAdults = users =>{
    if (!Array.isArray(users)){
        return 'Invalid'
    }
    for (const user of users){
        if (typeof user.name !== 'string' || user.name.trim().length === 0 ||!Number.isFinite(user.age)){
            return 'Invalid'
        }
    }
    return users.filter(user => user.age >= 18)
}

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

// 🟠 Problem 4 — Passed Students Report
const passedStudents = students => {
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    for (const student of students){
        if (typeof student !== 'object' || student === null || typeof student.name !== 'string' || student.name.trim().length === 0 || !Number.isFinite(student.marks)){
            return 'Invalid'
        }
    }
    return students.filter(student => student.marks >= 40).map(student => student.name);
}

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