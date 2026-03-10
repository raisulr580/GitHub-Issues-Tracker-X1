1️. What is the difference between var, let, and const?

var, let, and const are used to declare variables in JavaScript.
i)var is the old way of declaring variables and it is function-scoped. It can be redeclared and updated.
ii)let is block-scoped. It can be updated but cannot be redeclared in the same scope.
iii)const is also block-scoped, but its value cannot be changed after it is assigned.

2️. What is the spread operator (...)?
The spread operator (...) is used to expand elements of an array or object. It helps copy or combine arrays and objects easily.

3️. What is the difference between map(), filter(), and forEach()?

i)map() creates a new array by applying a function to each element.
ii)filter() creates a new array with elements that pass a condition.
iii)forEach() runs a function for each element but does not return a new array.

4️. What is an arrow function?
An arrow function is a shorter way to write a function in JavaScript using the => symbol. It makes the code cleaner and is often used for small functions.
Example:
const add = (a, b) => a + b;

5️. What are template literals?
Template literals are strings written using backticks (`). They allow embedding variables and expressions inside a string using ${}.
Example:
let name = "Rahat";
console.log(`Hello ${name}`);
