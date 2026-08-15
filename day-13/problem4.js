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


console.log(
    topScorer([
  { name: "John", marks: 80 },
  { name: "Alice", marks: 95 },
  { name: "Bob", marks: 90 }
])
);

console.log(topScorer([]))