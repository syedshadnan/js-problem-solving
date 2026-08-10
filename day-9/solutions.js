// 🟢 Problem 1 — Format User Info
const formatUser = user => {
    if (typeof user !== 'object' || user === null || typeof user.name !== 'string' || !Number.isFinite(user.age)){
        return 'Invalid'
    }

    const {name, age} = user;
    const cleanName = name.trim();
    if (cleanName.length === 0){
        return 'Invalid'
    }
    return `My name is ${cleanName} and I am ${age} years old.`
}

// 🟢 Problem 2 — Merge Arrays
const mergeUnique = (arr1, arr2) =>{
    if (!Array.isArray(arr1) || (!Array.isArray(arr2))){
        return 'Invalid'
    }
    for (const number of arr1){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    for (const number of arr2){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    const uniqueNumbers = [...new Set([...arr1, ...arr2])];
    return uniqueNumbers;

}

// 🟡 Problem 3 — Find Product By ID
const findProduct = (products, id) => {
  if (!Array.isArray(products)) {
    return "Invalid";
  }
  for (const elem of products) {
    if (typeof elem !== 'object' || elem === null || !Number.isFinite(elem.id) || typeof elem.name !== "string") {
      return "Invalid";
    }
    
  }
  const productById = products.find(product => product.id === id);

        return productById ?? null
};

// 🟠 Problem 4 — Count Passed Students
const countPassedStudents = students =>{
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    for (const student of students){
        if (typeof student !== 'object' || student === null || typeof student.name !== 'string' || !Number.isFinite(student.marks) || student.name.trim().length === 0 ){
            return 'Invalid'
        }
    }
    const totalPassed = students.reduce((accumulator, currentValue)=>{
        return currentValue.marks >= 40 ? accumulator + 1 : accumulator;
    },0)
    return totalPassed;
    
}

// 🔴 Problem 5 ⭐ Daily Challenge — Library Analyzer
const analyzeLibrary = (books) =>{
    // validations starts
    if (!Array.isArray(books)){
        return 'Invalid'
    }
    for (const book of books){
        if (typeof book !== 'object' || book === null || typeof book.title !== 'string' ||
            !Number.isFinite(book.pages) || typeof book.borrowed !== 'boolean'
        ){
            return 'Invalid from here'
        }
    }
    // validations ends
    let totalBooks = 0;
    let borrowedBooks = 0;
    let totalPages = 0;
    let largestBookPage = 0;
    let largestBook;
    for (const book of books){
        if (book.title){
            totalBooks++
        }
        if(book.borrowed){
            borrowedBooks++
        }
        totalPages+=book.pages;

        if (book.pages > largestBookPage){
            largestBookPage = book.pages;
            largestBook = book.title
        }
    }
    return {
        totalBooks,
        borrowedBooks,
        totalPages,
        largestBook
    }
}