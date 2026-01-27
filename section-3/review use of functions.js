const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement}years`);
        return retirement;
    }else{
        console.log(`${firstName} is already retired`);
        return -1;     
    }
    // return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2002, 'Trevor'));
console.log(yearsUntilRetirement(1940, 'Trevor'));
