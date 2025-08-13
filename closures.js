'use strict';

function logWithBlankLines(message) {
  console.log('');
  console.log(message);
  console.log('');
}

// execution context
// call stack
// scope chain
// closure bring all concepts together

// closure is not a feature we explicitly use.
// closures happen automatically  in certain situations.
// recognize those situations.

// A closure happens when a function remembers and
// can still access variables from the scope in which it was created
// even after that scope has finished executing.

console.log('-- Closures --');

const secureBooking = function () {
  // private variables, can't be accessed from outside
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(
      `${passengerCount} ${passengerCount === 1 ? 'passenger' : 'passengers'}`
    );
  };
};

// functions returning a new function
const booker = secureBooking(); // booker is a closure
// Booker finishes its execution context
// execution context is removed from the call stack

// bookers are in the global scope

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker); // function
// booker still has access to the passengerCount variable

logWithBlankLines('-- 2 more examples of Closures --');

// Example 1

// ff is a variable in the global scope
let ff;

const gg = function () {
  const aa = 13;
  // ff is a closure, assigned to a function
  // that has access to the variable aa
  ff = function () {
    console.log(aa * 2);
  };
};

const hh = function () {
  const bb = 113;
  ff = function () {
    console.log(bb * 2);
  };
};

gg(); // ff is now a closure
ff(); // 4
console.dir(ff); 


// Re-assign ff function 
hh(); // ff is now a closure again
ff(); // 226
console.dir(ff); 

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1001; // this variable is in the global scope
boardPassengers(180, 3);