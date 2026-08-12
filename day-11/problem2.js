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


console.log(findUserIndex(
  [
    { name: "john" },
    { name: "Alice" },
    { name: "Bob" }
  ],
  "Alice"
))