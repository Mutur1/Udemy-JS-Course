
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
