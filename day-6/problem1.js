// // 🟢 Problem 1 — Find Intersection

// function findIntersection(arr1, arr2) {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//     return "Invalid";
//   }
//   const newArr = [];
//   const newArr2 = [];
//   const intersectionArr = [];
//   for (const number of arr1) {
//     if (!newArr.includes(number)) {
//       newArr.push(number);
//     }
//   }
//   for (const number of arr2) {
//     if (newArr.includes(number)) {
//       newArr2.push(number);
//     }
//   }
//   for (const number of newArr) {
//     if (newArr2.includes(number)) {
//       intersectionArr.push(number);
//     }
//   }
//   return intersectionArr;
// }

function findIntersection(arr1, arr2){
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    for (const number of arr2){
        if(!Number.isFinite(number)){
            return 'Invalid'
        }
    }
    const result = [];
    for (const number of arr1){
        if (!Number.isFinite(number)){
            return 'Invalid'
        }
        if (arr2.includes(number) && !result.includes(number)){
            result.push(number);
        }
    }
    return result
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
console.log(findIntersection(arr1, arr2));
