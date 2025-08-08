'use strict';

console.log('-- HOISTING --');

// console.log(mich);
// console.log(job);
// console.log(year);

// * Variables *

var mich = 'Michal'; 
// but not initialized, so they are undefined at this point
// var variables are hoisted 

// let variables are not hoisted in the same way
// console.log(mich); // ReferenceError: Cannot access 'mich' before initialization
let job = 'Developer';

const year = 1986;

// * Functions *

console.log( addDeclaration(2, 3));
// works because function declarations are hoisted
// addExpression(2, 3); // ReferenceError: Cannot access 'addExpression' before initialization

// console.log(addExpression(3, 6)); // does not work
// addExpression(2, 3); // ReferenceError: Cannot access 'addArrow'

// console.log(addArrow(1, 7)); // works because arrow functions are hoisted


function addDeclaration(x,y) {
    return x + y;
}

const addExpression = function(x,y) {
    return x + y;
}

const addArrow = (x,y) => x + y;

// can't declare a variable with var will become undefined.

// Pitfall of hoisting
console.log('-- Pitfall of hoisting --');

console.log(numProducts); // undefined, because of hoisting

// numProducts is not defined here, because it is declared after the if statement
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('Deleting shopping cart...');
    // some code to delete the shopping cart
}

console.log('Do not use const. Use cons most of the times. Let sparingly ');
console.log('Write your varibles at the top of the file (scope)');
console.log('Declare all your functions first, and use them after declaration');


var xx = 1; // will show up in window object.
let yy = 2;
const zz = 3;

console.log('Window is the global object of JavaScript in the browser.'); 
console.log(xx === window.xx); // true
console.log(yy === window.yy); // false, because let is block scoped');
console.log(zz === window.zz); // false, because const is block scoped





