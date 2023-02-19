// breakup with var 
// no more use of var 
// let: let it to reassign
// const : do not allow it to reassign

let money = 45;
money = 56;
console.log(money);

const bird = "Jaan Pakhi";
// bird = "Moyna Pakhi"; reassign do not allow when declar variable using const
const message = bird + " potas potas";// use this variable
console.log(bird);
console.log(message);
const numbers = [12,89,65,45];
// reassign is not allowed
numbers.push(124);
numbers[1] = 99; // previous value can be modified
console.log(numbers);

const student = {
    name:"Mofiz",
    address: "Rongpur"
}
// student = {name:"Moffazul"}; // this is reassign
student.name = "Moffazol";
console.log(student);

for(const number of numbers ) {
    console.log(number);
}