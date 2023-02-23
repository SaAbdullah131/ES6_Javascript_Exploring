const numbers = [12,546,45,98];
let salary = 450;
salary = 455;

// 2 .Default parameters.
function calculateSalary(salary,tax=0.25,bonus =0) {
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}
// 3. Template string 
const elementHTML= ` 
<div>
    <h3>Name:</h3>
    <p>Address: </p>
    <p>salary: ${calculateSalary()}</p>
    <p>Others:${numbers[2]} </p>
</div>
`
// console.log(elementHTML);
// 4 .Arrow function
const doubleIt = x=>x*2;
const calculateSalary2=(salary,tax,bonus)=>salary - salary * tax + bonus;

// 5.Spread
const ages = [11,13,15,14,10,16,15];
const newAges = [...ages,23,25,26];
console.log(newAges);

// 6.Destructuring (property name and variable name)
const{x,y,z,...c} = {x:45,y:12,z:33,name:"Sakib Al hasan",salary: 450000};
console.log(c);
const [a,b,...r]= [12,45,21,65,98];
console.log(r);
