'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));
// console.log(fruitProcessor(2, 4));


// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
// const age1 = calcAge1(2002);
// console.log(age1);

// const calcAge2 = function(birthYear){
//     return 2025 - birthYear;
// }
// const age2 = calcAge2(2007);
// console.log(age2);

// const calcAge3 = birthYear => 2025 - birthYear;
// console.log(calcAge3(2002));

// const yearsUntilRetirement =( birthYear, firstName) =>{
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}years.`;
// }
// console.log(yearsUntilRetirement(2002, 'Trevor'));


const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        return retirement;
    }else{
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2002, 'Trevor'));
console.log(yearsUntilRetirement(1940, 'Trevor'));
