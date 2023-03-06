
console.log(1);
console.log(2);
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then(res=>res.json())
//         .then(data => console.log(data))
setTimeout(doSomething,4000);// this asynchronous // 40000 miliseconds
const timeOutId = setTimeout(()=>{
    console.log("lazy Logged");
},2000);
console.log(4);
console.log(5);

function doSomething() {
    console.log(3);
}

let num = 0;
const intervalId = setInterval(()=>{
    console.log(++num);
    if(num === 10) {
        clearInterval(intervalId);
    }
},1000);