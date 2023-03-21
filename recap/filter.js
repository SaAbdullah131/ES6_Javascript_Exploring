
const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers.filter((currentValue,index,arr)=>{
    console.log(index);
    console.log(arr);
    return currentValue > 4;
});
console.log(numbers);
console.log(result);