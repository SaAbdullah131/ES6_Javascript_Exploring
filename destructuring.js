const fish = {
    name:"king Hilsan",
    address: 'Chadpur',
    color: 'silver',
    phone: '012434383473',
    price : 4000
}
// const phoneNumber = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;
// console.log(phoneNumber);
// console.log(phoneNumber);
// console.log(phoneNumber);
// console.log(phoneNumber);
// destructuring 
const {age,name,profession}= {name:'Almas',age:56,profession:"makeup Artist"};
console.log(age,name,profession);
const{address}=fish;
console.log(address);

// array destructuring 
const [first,another] = [44,99,88,456];
console.log(first,another);

const nayoks = ['sakib','bappi','raj'];
const [king,lost,notun] = nayoks;
console.log(king,lost,notun);

const getNames = () => ['alim','halim'];
const [baba,chacha] = getNames();
console.log(baba,chacha);