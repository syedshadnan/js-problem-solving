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


console.log(movieRanking(
    [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 9.2 },
  { title: "Movie C", rating: 7.8 }
]
)
)