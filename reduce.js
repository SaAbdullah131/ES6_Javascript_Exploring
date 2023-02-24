// map,forEach,filter,find,reduce.

const numbers = [1,2,3,4,5];
//.reduce (accumulatorFunction,initial Value)
//accumulatorFunction use two parameter
const total = numbers.reduce((previous,current)=>{
     return previous + current},
0);
console.log(total);