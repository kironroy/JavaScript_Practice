'use strict';

console.log('-- This --');

console.log(this);

const calcAges = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

// undefined, because 'this' in a regular function refers to the global object
// in non-strict mode or is undefined in strict mode
calcAges(1991);

// arrow functions do not have their own 'this' context
// they inherit 'this' from the surrounding lexical context
const calcAgesArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgesArrow(1986);

const zelda = {
  year: 1987,
  calcAges: function () {
    console.log(this);
    console.log(2038 - this.year);
  },
};

zelda.calcAges(); // 'this' refers to the zelda object

const link = {
  year: 2016,
};

link.calcAges = zelda.calcAges; // method borrowing
link.calcAges(); // 'this' refers to the link object

// this keyword always points to the object that is calling the method

const h = zelda.calcAges; // h is a reference to the function, not the object

console.log(h); // logs the function definition
