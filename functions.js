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
}

newPassport(tom);
checkIn(flight, tom);

// JavaScript only does passing by value 

logWithBlankLines('-- Functions as First-Class Citizens --');




