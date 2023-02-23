const add = (first,second) =>first+second;
const getFullName = (firstName,lastName) => firstName + ' ' + lastName;
const multiply = (a,b)=>a*b;

const addAll = (a,b,c,d,e,f) => a+b+c+d+e+f;

// no parameter arrow function
const getPie = ()=>3.1416;
//one parameter;
const doubleIt= (num)=>num*num;
//one parameter simple version
const fiveTimes = num =>num*5;

// Multi Line arrow function
// if you want to return something use return
const doMath = (x,y,z) => {
    const firstSum = x+y;
    const secondSum = y+z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult /2;
    return result;
}
const result = multiply(7,8);
const fullName= getFullName("SA","Abdullah");

console.log(fullName);
console.log(result);