const numbers = [12,56,87,44];
const half = numbers.map(num=>num/2);
const third = numbers.map(x=>x/3);
console.log(half);
console.log(third);

const friends = ['Tom Hanks',"Tom Cruise","Tom Solaiman"];
const firstLetters = friends.map(friend =>friend[3]);
console.log(firstLetters);

const nameLengths = friends.map(friend =>friend.length);
console.log(nameLengths);

const products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'mobile',price:80000},
    {id:3,name:'watch',price: 35000},
    {id:4,name:'tablet',price:25000},
];

const items = products.map(products=>products.name);
const price = products.map(products =>products.price);
console.log(price);
console.log(items);