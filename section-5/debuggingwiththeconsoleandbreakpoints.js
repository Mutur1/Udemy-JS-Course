'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius')),
  };

  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
//IDENTIFY THE BUG
// we will receive 100273, the nput value was concatenated with
//  273 and thats not what we want, there is bug somewhere so lets find it

// FIND THE BUG
//   console.log(measurement);
//using this console we were able to identify the problem, the issue was that the input value was a string

// FIX THE BUG
//value: prompt('Degrees celcius'),
//We will convert the string into a number
//value: prompt('Degrees celcius'), to this >>  value: Number(prompt('Degrees celcius')),
