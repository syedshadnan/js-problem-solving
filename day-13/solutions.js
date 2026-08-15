// 🟢 Problem 1 — Sort Numbers Ascending
const sortAscending = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number => !Number.isFinite(number))){
        return 'Invalid'
    }
    return [...numbers].sort((a, b)=> a - b)
}

// 🟢 Problem 2 — Sort Numbers Descending
const sortDescending = numbers => {
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    if (numbers.some(number=> !Number.isFinite(number))){
        return 'Invalid'
    }
    return [...numbers].sort((a,b)=> b - a);
}

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

// 🟠 Problem 4 — Top Scorer
const topScorer = students => {
    if (!Array.isArray(students) || students.length === 0){
        return 'Invalid'
    }
    if (students.some(student => Array.isArray(student) || !student || typeof student.name !== 'string' || student.name.trim().length === 0 || !Number.isFinite(student.marks) || student.marks < 0)){
        return 'Invalid'
    }
    const sorted = [...students].sort((a, b)=> b.marks - a.marks);
    return sorted[0];
}

// 🔴 Problem 5 ⭐ Daily Challenge — Movie Ranking System

const movieRanking = movies => {
    if (!Array.isArray(movies) || movies.length === 0){
        return 'Invalid'
    }
    if (movies.some(movie => Array.isArray(movie) || !movie || typeof movie.title !== 'string' || movie.title.trim().length === 0 || !Number.isFinite(movie.rating))){
        return 'Invalid'
    }
    
    const ranking = [...movies].sort((a, b)=> b.rating - a.rating);

    return {
        highestRated: ranking[0].title,
        lowestRated: ranking[ranking.length-1].title,
        averageRating: ranking.reduce((acc, curr)=> acc + curr.rating / ranking.length, 0)
    }
} 