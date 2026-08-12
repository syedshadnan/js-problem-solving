// 🟢 Problem 1 — Find First Negative Number
const findFirstNegative = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }

    if (!numbers.every(number => Number.isFinite(number))){
        return 'Invalid'
    }

    return numbers.find(number => number < 0) ?? null;
}

// 🟢 Problem 2 — Find User Index
const findUserIndex = (users, name) =>{
    if (!Array.isArray(users) || typeof name !== 'string' || name.trim().length === 0){
        return 'Invalid'
    }
    if (users.some(user => Array.isArray(user) || typeof user !== 'object' || user === null || typeof user.name !== 'string' || user.name.trim().length === 0)){
        return 'Invalid'
    }

    return users.findIndex(user => user.name === name);
}

// 🟡 Problem 3 — Has Passing Student
const hasPassingStudent = students =>{
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    if (students.some(student => Array.isArray(student) || typeof student !== 'object' || student === null || typeof student.name !== 'string' || student.name.trim().length === 0|| !Number.isFinite(student.marks) )){
        return 'Invalid'
    }
    return students.some(student => student.marks >= 40);
}

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
