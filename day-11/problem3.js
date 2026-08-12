// 🟡 Problem 3 — Has Passing Student

const hasPassingStudent = students =>{
    if (!Array.isArray(students)){
        return 'Invalid'
    }
    if (students.some(student => Array.isArray(student) || typeof student !== 'object' || student === null || typeof student.name !== 'string' || student.name.trim().length === 0|| !Number.isFinite(student.marks) )){
        return 'Invalid'
    }
    return students.some(student => student.marks >= 40);
}

console.log(hasPassingStudent([
  { name: "John", marks: 20 },
  { name: "Alice", marks: 50 }
]))