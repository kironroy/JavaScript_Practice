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

logWithBlankLines('-- 3 examples of Closures --');
