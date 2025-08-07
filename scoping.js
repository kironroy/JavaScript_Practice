'use strict';

// -- SCOPING --  Scope chain

// calculateAge is defined in global scope

function calculateAge(birthYear) {
  // function creates its own scope
  const age = 2032 - birthYear;
  const firstPerson = 'Reene'; // current scope
  // JS did a var lookup and found that firstPerson is in the global scope
  console.log(firstPerson);
  console.log('---------------------');
  //   console.log(lastPerson); ERROR
  return age;
}

function calculateAgeTwo(birthYear) {
  // function creates its own scope
  const age = 2032 - birthYear;
  function postAge() {
    const outstuff = `${firstPerson} You are ${age}, born in ${birthYear}`;
    // let outstuff = `${firstPerson} You are ${age}, born in ${birthYear}`;
    console.log(outstuff);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // don't use var!
      var millennial = true; // function scoped so it will should outside of the if block
      const str = `You are a millennial, ${firstPerson}`;
      console.log(str);

      function addSum(num1, num2) {
        return num1 + num2;
      }
    }

    // outstuff = '';
    
    // console.log(str); // ERROR: str is not defined in this scope
    console.log(millennial);
    // console.log(addSum(5, 10)); // ERROR: addSum is not defined in this scope will not work in strict mode
  }

  postAge();
  return age;
}

// global variable

const firstPerson = 'Trini';

// function calls
calculateAge();
calculateAgeTwo(1985);

// console.log(age); // ERROR: age is not defined in global scope
