const numbers = [2,8,4,6,3];
const output = [];
for(const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

function getSquare(numbers) {
    const output = [];
   for(const number of numbers) {
    const squ =square(number) ;
    output.push(squ);
}
return output;
}
// function square(number){
//     return number * number;
// }
const square = (number)=>number*number;
const result = getSquare(numbers);
console.log(result);

const makedouble = numbers.map(square);
const makedoubleDirest = numbers.map(num=>num*2);
const fiveTimes = [1,2,3,4,5].map(x => x* 5);
console.log(fiveTimes);
// console.log(makedoubleDirest);
// console.log(makedouble);
/* 
purpose:
1.get an array
2.for every element of the array do something 
3.Store the result in an array 
4.return the result array
*/