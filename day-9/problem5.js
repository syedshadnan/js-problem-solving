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

console.log(analyzeLibrary([
  {
    title: "JavaScript Basics",
    pages: 250,
    borrowed: true
  },
  {
    title: "React Guide",
    pages: 400,
    borrowed: false
  },
  {
    title: "Node.js Mastery",
    pages: 350,
    borrowed: true
  }
]));