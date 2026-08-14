// 🟠 Problem 4 — Average Marks

const averageMarks = students => {
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    if (students.length === 0){
        return 0;
    }
    
    if (students.some(student => Array.isArray(student) || typeof student !== 'object' || student === null || typeof student.name !== 'string' || student.name.trim().length === 0 || !Number.isFinite(student.marks) || student.marks < 0)){
        return 'Invalid'
    }
    return students.reduce((acc,current)=> acc + current.marks , 0) / students.length;
}


console.log(averageMarks(
    [
  { name: "John", marks: 80 },
  { name: "Alice", marks: 60 }
]
))
console.log(averageMarks(
    [
  
]
))