'use strict';


console.log('-- Functions --');

const bookingsArr= [];

const createBooking = function(flightNum, numPassengers = 2, price = 185) {
// ES5 
    // numPassengers = numPassengers || 1;
    // price = price || 199;
// ES6

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookingsArr.push(booking);
    
}

createBooking('LH123');
createBooking('LH123', 4, 909);


