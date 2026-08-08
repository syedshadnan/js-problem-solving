function analyzeResults(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    let totalMarks = 0;
    let totalCount = 0;

    let highestAverage = -Infinity;
    let topStudent = "";

    for (const info of students) {

        if (
            typeof info !== "object" ||
            info === null ||
            typeof info.name !== "string" ||
            !Array.isArray(info.marks) ||
            info.marks.length === 0
        ) {
            return "Invalid";
        }

        let studentTotal = 0;

        for (const mark of info.marks) {

            if (!Number.isFinite(mark)) {
                return "Invalid";
            }
            console.log(mark)

            studentTotal += mark;

            totalMarks += mark;
            totalCount++;
        }

        const studentAverage = studentTotal / info.marks.length;

        if (studentAverage > highestAverage) {
            highestAverage = studentAverage;
            topStudent = info.name;
        }
    }

    return {
        topStudent,
        averageMarks: totalMarks / totalCount
    };
}


const studentResults = [
    {
        name: "John",
        marks: [80, 90, 70]
    },
    {
        name: "Alice",
        marks: [95, 90, 100]
    }
];

console.log(analyzeResults(studentResults));