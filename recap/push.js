// Array.prototype.push()

const numbers = [1,2,3,4,5,7];

numbers.push(90); // last add
numbers.unshift(11);
// when trying to push like array
numbers.push([10,20,30]);
// push store in a variable it just push last element 
let pushing = numbers.push(90,80,55); // just store 55 in pushing variable 
console.log(numbers);
console.log(pushing);