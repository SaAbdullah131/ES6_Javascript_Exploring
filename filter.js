const numbers = [13,5,23,45,11,18,9,55,61,1];
const bigNums= numbers.filter(number => number>20);
const tiny = numbers.filter(num=>num<10);
const even = numbers.filter(n=>n%2===0);
console.log(even);
console.log(tiny);
console.log(bigNums);

const products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'mobile',price:80000},
    {id:3,name:'watch',price: 35000},
    {id:4,name:'tablet',price:25000},
];

const expensive = products.filter(products=>products.price>100000);
const cheaper = products.filter(products=>products.price<20000);

console.log(cheaper);
console.log(expensive);