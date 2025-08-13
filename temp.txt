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

console.log('-----------------------------');

function createTextFormatter(style) {
  return function(text) {
    switch (style) {
      case 'upper':
        return text.toUpperCase();
      case 'lower':
        return text.toLowerCase();
      case 'title':
        return text
          .split(' ')
          .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      default:
        return text;
    }
  };
}

// Try it out:
const shout = createTextFormatter('upper');
const whisper = createTextFormatter('lower');
const headline = createTextFormatter('title');

console.log(shout('hello world'));     // "HELLO WORLD"
console.log(whisper('HELLO WORLD'));   // "hello world"
console.log(headline('hello world'));  // "Hello World"


