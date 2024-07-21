// Day 2 :-

// activity-01-arithmetic-operators

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    return a / b;
}

// Function to find the remainder
function findRemainder(a, b) {
    return a % b;
}

// Function to use the += operator
function increment(value, amount) {
    value += amount;
    return value;
}

// Function to use the -= operator
function decrement(value, amount) {
    value -= amount;
    return value;
}

// Function to perform comparisons
function compare(a, b) {
    console.log(`${a} == ${b}:`, a == b);
    console.log(`${a} != ${b}:`, a != b);
    console.log(`${a} < ${b}:`, a < b);
    console.log(`${a} > ${b}:`, a > b);
    console.log(`${a} <= ${b}:`, a <= b);
    console.log(`${a} >= ${b}:`, a >= b);
}

// Function to demonstrate logical operators
function logicalOperators(x, y) {
    console.log(`x && y: ${x && y}`);
    console.log(`x || y: ${x || y}`);
    console.log(`!x: ${!x}`);
}

// Function to use the ternary operator
function checkEligibility(age) {
    return (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
}

// Task executions

// Arithmetic operations
let num1 = 10, num2 = 20;
console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`);

let num3 = 34, num4 = 23;
console.log(`The difference between ${num3} and ${num4} is: ${subtract(num3, num4)}`);

let num5 = 40, num6 = 54;
console.log(`The product of ${num5} and ${num6} is: ${multiply(num5, num6)}`);

let num7 = 66, num8 = 11;
console.log(`The division of ${num7} by ${num8} is: ${divide(num7, num8)}`);

let num9 = 68, num10 = 7;
console.log(`The remainder of ${num9} divided by ${num10} is: ${findRemainder(num9, num10)}`);

// Assignment operators
num1 = increment(num1, 4);
console.log(`The updated value of num1 after using += operator is: ${num1}`);

num2 = decrement(num2, 5);
console.log(`The updated value of num2 after using -= operator is: ${num2}`);

// Comparison operators
let a = 10, b = 20;
compare(a, b);

// Logical operators
let x = true, y = false;
logicalOperators(x, y);

// Ternary operator
let age = 18;
console.log(`Age ${age}: ${checkEligibility(age)}`);
