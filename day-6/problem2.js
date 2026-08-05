// 🟢 Problem 2 — Toggle Case

function toggleCase(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = "";
  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      result += char.toLowerCase();
    } else if (char >= "a" && char <= "z") {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}

console.log(toggleCase("AbC"));
