// 🟢 Problem 1 — Format User Info

const formatUser = user => {
    if (typeof user !== 'object' || user === null || typeof user.name !== 'string' || !Number.isFinite(user.age)){
        return 'Invalid'
    }

    const {name, age} = user;
    const cleanName = name.trim()
    if (cleanName.length === 0){
        return 'Invalid'
    }
    return `My name is ${cleanName} and I am ${age} years old.`
}


console.log(formatUser({
  name: "       ifty         ",
  age: 25
}));

// "My name is Ifty and I am 25 years old."