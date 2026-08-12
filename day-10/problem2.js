// 🟢 Problem 2 — Get Adult Users

const getAdults = users =>{
    if (!Array.isArray(users)){
        return 'Invalid'
    }
    for (const user of users){
        if (typeof user !== 'object' || typeof user.name !== 'string' || user.name.trim().length === 0 ||!Number.isFinite(user.age)){
            return 'Invalid'
        }
    }
    return users.filter(user => user.age >= 18)
}

console.log(getAdults([
  { name: "john", age: 15 },
  { name: "Alice", age: 22 }
]))