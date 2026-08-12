// 🟠 Problem 4 — Passed Students Report

const passedStudents = students => {
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    for (const student of students){
        if (typeof student !== 'object' || student === null || typeof student.name !== 'string' || student.name.trim().length === 0 || !Number.isFinite(student.marks)){
            return 'Invalid'
        }
    }
    return students.filter(student => student.marks >= 40).map(student => student.name);
}

console.log(passedStudents(
    [
  { name: "John", marks: 80 },
  { name: "Alice", marks: 35 },
  { name: "Bob", marks: 50 }
]
))