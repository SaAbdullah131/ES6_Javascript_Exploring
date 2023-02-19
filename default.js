// function add(first,second) {
//     console.log(first,second);
//     second = second || 0;// true hole second ta kei second er modde assign kore dibe
//     // if(second === undefined) {
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }
function add (first ,second =0){ // when default undefined that mean you are not pass the value ... set default value as you can..
    const total = first + second;
    return total;
}
const result = add(10,20);
console.log(result);