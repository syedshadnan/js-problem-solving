// 🟢 Problem 1 — Unique Positive Numbers
function uniquePositiveNumbers(numbers){
    if (!Array.isArray(numbers)){
        return 'Invalid'
    }
    const uniquePositive = [];
    for (const number of numbers){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (number > 0 && !uniquePositive.includes(number)){
            uniquePositive.push(number);
        }
    }
    return uniquePositive
}

// 🟢 Problem 2 — Word Frequency
function wordFrequency(sentence){
    if (typeof sentence !== 'string' || sentence.trim === ''){
        return 'Invalid'
    }
    const splitSentence = sentence.toLowerCase().trim().split(/\s+/);
    const countMap = {};

    for (const word of splitSentence){
        if (countMap[word]){
            countMap[word]+=1;
        } else {
            countMap[word] = 1;
        }
    }
    return countMap;
}

// 🟠 Problem 4 — Most Frequent Word
function mostFrequentWord(sentence){
    if (typeof sentence !== 'string' || sentence.trim() === ''){
        return 'Invalid'
    }

    const splitSentence = sentence.toLowerCase().trim().split(/\s+/)

    const countMap = {}
    let wordCount = 0;
    let mostFrequentWord;

    for (const word of splitSentence){
        if (countMap[word]){
            countMap[word]+=1;
        } else {
            countMap[word] = 1;
        }
        if (countMap[word] > wordCount){
            wordCount = countMap[word];
            mostFrequentWord = word;
        }
    }
    return mostFrequentWord;
}
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