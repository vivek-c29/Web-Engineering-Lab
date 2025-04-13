
const math = require('./mathUtils');

let n1=5,n2=-3;
let s1="Hello"
let s2='John Joseph';
const res1 = math.add(n1,n2);
const res2 = math.subtract(n1,n2);
const res3 = math.product(n1,n2);
const res4 = math.division(n1,n2);
const res5 = math.modulo(n1,n2);
const res6 = math.concat(s1,s2);

console.log('Addition of 5 & -3 is :',res1);
console.log('Subtraction of 5 & -3 is :',res2);
console.log('Multiplication of 5 & -3 is :',res3);
console.log('Divison of 5 & -3 is :',res4);
console.log('Modulo of 5 & -3 is :',res5);
console.log('Concatenation of two strings is :',res6);
