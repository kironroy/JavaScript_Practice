'use strict';

console.log('-- Functions --');

function logWithBlankLines(message) {
  console.log('');
  console.log(message);
  console.log('');
}

const bookingsArr = [];

const createBooking = function (flightNum, numPassengers = 2, price = 185) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  // ES6

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingsArr.push(booking);
};

createBooking('LH123');
createBooking('LH123', 4, 909);

logWithBlankLines('-- How passing arguments work, Value vs Ref --');

// flight is primitive, tom is object
// Primitive types are passed by value, objects are passed by reference

const flight = 'YE123';
const tom = { name: 'Tom', passport: 123456789 };

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 123456789) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, tom);
console.log(flight);
console.log(tom);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(tom);
checkIn(flight, tom);

// JavaScript only does passing by value

logWithBlankLines('-- Functions as First-Class Citizens --');

console.log('High Order Functions');

const singleWord = function (string) {
  return string.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (string) {
  const [first, ...others] = string.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const wordTransformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Word transformed: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// upperFirstWord is only passed in bot called!
wordTransformer('JavaScript is the best', upperFirstWord);
wordTransformer('JavaScript is the best', singleWord);

// high5 is the callback function
const high5 = function () {
  console.log('👋');
};

// higher-order function
// JavaScript uses callbacks all the time

document.body.addEventListener('click', high5);

const people = ['Vini', 'Tina', 'Mina', 'Reene'];

people.forEach(high5);

logWithBlankLines('-- Functions Returning Functions --');

// greet function returns another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// converted to arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Mina');

console.log('');

const greetHey = greet('Hey');
greetHey('Tina');
greetHey('Vini');

console.log('');

greetArrow('Yo!')('Mikey');

logWithBlankLines('-- Returning two values at once --');

const orderTwo = (a, b) => {
  if (a > b) {
    return [a, b];
  } else {
    return [b, a];
  }
};

let [big, small] = orderTwo(5, 3);
console.log(small, big);
