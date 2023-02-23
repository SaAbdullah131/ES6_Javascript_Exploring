
const friends= ["Tom Hanks","Tom Cruise","Tom Brady","Tom Solaiman"];
// forEach doesn't return anything...return undefine
friends.forEach(friend => console.log(friend));

const products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'mobile',price:80000},
    {id:3,name:'watch',price: 35000},
    {id:4,name:'tablet',price:25000},
];

products.forEach(products =>console.log(products.name));
const expensive = products.filter(products=>products.price>10000);
console.log(expensive);

