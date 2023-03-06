

// promise asynchronous behavior 
const getData = new Promise((resolve,reject)=>{
    const num=Math.random()*1000;
    console.log(num);
    if(num < 500){
        resolve(566665);
    } else {
        reject("No Data Available");
    }
    
})

getData.then(data=>console.log(data +22))
.catch(err => console.log("ERR",err));



// async await while asynchronous
async function getUsers(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
}