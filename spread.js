const max = Math.max(12,86,999,78);
// console.log(max);
const numbers = [12,86,999,78];
const largest = Math.max(...numbers);

// console.log(...numbers);
// console.log(largest);
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
const numbers3 = [...numbers];
const numbers4 = [444,...numbers,111]
console.log(numbers);
console.log(numbers2);
console.log(numbers4);