// 🔴 Problem 5 ⭐ Daily Challenge

function longestCommonPrefix(words) {
    if (!Array.isArray(words) || words.length === 0) {
        return "Invalid";
    }

    for (const word of words) {
        if (typeof word !== "string") {
            return "Invalid";
        }
    }

    const firstWord = words[0];
    let prefix = "";

    for (let i = 0; i < firstWord.length; i++) {

        const currentChar = firstWord[i];

        for (const word of words) {

            if (word[i] !== currentChar) {
                return prefix;
            }

        }

        prefix += currentChar;
    }

    return prefix;
}

console.log(longestCommonPrefix([
    "flower",
    "flow",
    "flight"
]))