
//  integer  
let year = 22;
console.log(year); 
// Float
let height = 5.9;
console.log(height);
// String
let name = 'Dhanu Bor Mondal';
console.log(name);
// Boolean
let isdhanu = true;
console.log(isdhanu);
// Null
let age = null;
console.log(age);
// Undefined
let test;
console.log(test);
//place
let Number1 = 10;
let Number2 = 20;
let sum = Number1 + Number2;
console.log(sum);
//sub
let sub = Number1 - Number2;    
console.log(sub);
//mul
let mul = Number1 * Number2;
console.log(mul);
//div

let div = Number1 / Number2;
console.log(div);
//mod
let mod = Number1 % Number2;
console.log(mod);
//increment
let increment = Number1++;
console.log(increment);
//decrement
let decrement = Number1--;
console.log(decrement);
//comparison
let comparison = Number1 == Number2;
console.log(comparison);
//strict comparison
let strictComparison = Number1 === Number2;
console.log(strictComparison);
//not equal
let notEqual = Number1 != Number2;
console.log(notEqual);
//strict not equal
let strictNotEqual = Number1 !== Number2;
console.log(strictNotEqual);
//greater than
let greaterThan = Number1 > Number2;
console.log(greaterThan);
//less than
let lessThan = Number1 < Number2;

console.log(lessThan);
//greater than or equal to
let greaterThanOrEqual = Number1 >= Number2;
console.log(greaterThanOrEqual);
//less than or equal to
let lessThanOrEqual = Number1 <= Number2;
console.log(lessThanOrEqual);
//and
let and = Number1 > 5 && Number2 < 10;
console.log(and);
//or
let or = Number1 > 5 || Number2 < 10;
console.log(or);
//not
let not = !(Number1 > 5);
console.log(not);
//if else
if(Number1 > Number2){
    console.log('Number1 is greater than Number2'); 
}else{
    console.log('Number1 is less than Number2');
}
//else if
if(Number1 > Number2){
    console.log('Number1 is greater than Number2');
}
else if(Number1 < Number2){
    console.log('Number1 is less than Number2');
}   
else{
    console.log('Number1 is equal to Number2');
}
//switch
let day = 2;
switch(day){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
}
//while loop
let i = 0;
while(i < 20){
    console.log(i);
    i++;
} 
//do while loop
let j = 1;
do{
    console.log(j);
    j++;
}while(j < 20);
//for loop 
for(let k = 0; k < 20; k++){
    console.log(k);
} 
//for in loop
let person = {
    name: 'Dhanu',
    age: 22
};
for(let key in person){
    console.log(key, person[key]);
}
//for of loop
let colors = ['red', 'green', 'blue'];
for(let color of colors){
    console.log(color);
}
//break
for(let l = 0; l < 10; l++){
    if(l === 5) break;
    console.log(l);
}
//continue
for(let m = 0; m < 10; m++){
    if(m === 5) continue;
    console.log(m);
}




