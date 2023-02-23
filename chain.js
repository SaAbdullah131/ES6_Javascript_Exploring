const users = [
    {id:1,name:'Abul',job:"doctor"},
]
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id:1,Name:'Babul',job:"leader"},
        {id:2,Name:'dabul',job:"pati-leader"},
    ]
}
const firstJob = data.data[0].job
console.log(firstJob);

const user = {
    id:5001,
    name:"Thomas Alba Edison",
    address: {
        street:{
            first:"35/A kochukhet lane",
            second: "third Floor",
            side:"right"
        },
        postOffice: 'cantonment',
        city:'Dhaka'
    }
}
const userFloor = user.address.stret?.second ; // one after another dot is called chaining
console.log(userFloor);