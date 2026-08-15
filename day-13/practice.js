const numbers = [5,3,4,5,6,];

numbers.sort();

console.log(numbers)


const numbers2 = [100, 5, 20, 1];
numbers.sort();

console.log(numbers);
// Because JavaScript converts values to strings by default.
// alphabetically instead of numerically.


// <<Numeric Sorting>>
// Descending Order
const numericSorting = [100, 50, 55, 200, 1,3,5];

const ascending = numericSorting.sort((a, b)=> a - b)
console.log("Ascending:",ascending);



// Ascending Order
const descending = numericSorting.sort((a, b)=> b - a);
console.log("Descending:", descending);


// Sorting Strings: Alphabetical Order
const names = ['John', 'Alice', 'Bob'];
names.sort();
console.log(names);


// object sorting
const users = [
    { name: "John", age: 30},
    { name: "Alice", age: 22},
    { name: "Bob", age: 40}
]

users.sort((a, b) => a.age - b.age);
console.log(users);

// Important: sort() Mutates
// sort() changes the original array.

const num = [3,2,1];
// const sortedNum = num.sort((a,b) => a -b);
console.log(num)
// console.log(sortedNum)


// Avoid Mutation:

const sorted = [...num].sort((a, b) => a - b);
// The spread operator creates a copy first.
// This is extremely important in React.
console.log(sorted)

// React prefers immutable updates.
// That's why we copy first.


