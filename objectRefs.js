'use strict';

console.log('-- Object references --');

// object will be stored in the heap
const zelda = {
  firstName: 'Zelda',
  lastName: 'Williams',
  age: 34,
};

// copy does not create a new object in the heap
// it just copies the reference to the same object
// marriedZelda is a reference to the same object as zelda
// so changes to marriedZelda will affect zelda

// const marriedZelda = zelda;
// marriedZelda.lastName = 'Smith';

// objects are passed by reference
// so we can create a function that modifies the object
// it will modify the original object

const marriedZelda = marry(zelda, 'Fitzgerald');

// console.log('before marriage:', zelda);
// console.log('after marriage:', marriedZelda);

console.log('---------------------------');

function marry(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const zelda2 = {
  // firstName and lastName are primitive values
  firstName: 'Zelda',
  lastName: 'Williams',
  //age is a primitive value
  age: 34,
  // family is a reference to the same array in the heap
  // family is a nested object
  // it will create a reference to the same array
  family: ['Alan', 'Robin'],
};

// !!!!!! both zelda2 and zeldaCopy point to the same object in the heap !!!!!

// original object is not modified
// we can create a shallow copy of the object

// zeldaCopy is a brand new object in the heap
const zeldaCopy = { ...zelda2 }; // shallow copy
// only the first level properties are copied
zelda2.lastName = 'Khan';

// console.log(zelda, zelda2);

zeldaCopy.family.push('Tina', 'Scott', 'Another one'); // this will not affect zelda2.family

// console.log('before marriage:', zelda2);
// console.log('after marriage:', zeldaCopy);

console.log('----- DEEP COPY -----');

const zeldaDeepCopy = structuredClone(zelda2); // deep copy 
zeldaDeepCopy.family.push('Wally'); // this will not affect zelda2.family
zeldaDeepCopy.family.push('Paly'); // this will not affect zelda2.family

console.log('original:', zelda2);
console.log('clone:', zeldaDeepCopy);
