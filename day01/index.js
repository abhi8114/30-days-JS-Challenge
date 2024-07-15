//ACTIVITY 01

var num = 10;   //task 01
console.log(num);

let str = "abc"; //task 02
console.log(str);

//ACTIVITY 02

const data = true ; //task 03
console.log(data);

//ACTIVITY 03   

// task 04

let name = "abhi"; 
console.log(typeof name); //string

let age = 30; 
console.log(typeof age); //number

let isMarried = false ;
console.log(typeof isMarried); //boolean

let car ={
    name : "rolls-royce",
    model: "rolls-royce-phantom",
};
console.log( typeof car); //object

let fruits = ["apple","mango","banana"];
console.log(typeof fruits); //array

function hello(){
    return "HEllO WORLD";
}
console.log(typeof hello); //function

let weight = null; 
console.log(typeof weight); //null

//ACTIVITY 04

//task 05

//assigning initial value 
let favGame = "football" ;
console.log("INITIALLY:", favGame);

//reassigning 
favGame = "cricket";
console.log("AFTER REASSIGNING: ", favGame); // OUTPUT:- AFTER REASSIGNING: cricket


//ACTIVITY 05

//task 06
const num1 = 66;
num1 = 77 ;
console.log(num1); /* this will throw an error as we can't reassign any value to a constant */
