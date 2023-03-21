// Array.prototype.concat

const numbers1 = [1,2,3,4,5];
const numbers2 = [6,7,8,9,10];

const result = numbers1.concat(numbers2);

console.log(numbers1); // concat does not change the main array
console.log(result);