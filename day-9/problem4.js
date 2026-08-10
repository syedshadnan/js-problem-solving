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

console.log(countPassedStudents([
  { name: "John", marks: 80 },
  { name: "Alice", marks: 35 },
  { name: "Bob", marks: 50 }
]));