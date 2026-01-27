// const trevor = {
//     firstName:'Trevor',
//     lastName:'Muturi',
//     age: 2026 - 2002,
//     job:'student',
//     friends: ['Peter', 'Parker', 'Kirby'],
// };

// console.log(trevor.job)
// console.log(trevor['lastName']);

// const nameKey = 'Name';
// console.log(trevor['first' + nameKey]);
// console.log(trevor['last' + nameKey]);

// const interestedIn = prompt('what do you want to know about Trevor? Choose; firstName, lastName, age, job, friends');

// if(trevor[interestedIn]){
//     console.log(trevor[interestedIn]);
// }else{
//     console.log('Wrong request');
// };



// Write a method called getSummary this method should return a string which should kind 
// of summarize the data about trevor ; 'Trevor is a 23-year old teacher and he has a drivers license'
const trevor2 = {
    firstName: 'Trevor',
    lastName: 'Muturi',
    birthYear: 2002,
    job: 'student',
    friends: ['Peter', 'Parker', 'Kirby'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
    }
};
console.log(trevor2.calcAge());
console.log(trevor2.getSummary());

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

//     For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

//     Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

//     Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }

};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi>john.bmi){
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`)
}else if(john.bmi>mark.bmi){
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`)
};
