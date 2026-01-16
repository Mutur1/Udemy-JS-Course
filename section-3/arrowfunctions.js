function calcAge1(birthYear) {
    return 2025 - birthYear;
}
const age1 = calcAge1(2002);
console.log(age1);

const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2007);
console.log(age2);

const calcAge3 = birthYear => 2025 - birthYear;
console.log(calcAge3(2002));

const yearsUntilRetirement =( birthYear, firstName) =>{
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}years.`;
}
console.log(yearsUntilRetirement(2002, 'Trevor'));
