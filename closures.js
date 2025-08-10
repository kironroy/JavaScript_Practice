'use strict';

function createCounter() {
  let count = 0; // This variable is enclosed

  return function() {
    count++;
    console.log(`Current count: ${count}`);
  };
}

const counter = createCounter();
counter(); // Current count: 1
counter(); // Current count: 2
counter(); // Current count: 3
