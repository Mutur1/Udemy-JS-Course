'use strict';

// const numbers = [2, 3, 4];
// const [a, b, c] = numbers;
// console.log(a, b, c);

//deconstructing 2 elements in the categories array
// const [First, Second] = restaurant.categories;
// console.log(First, Second);

// if need just lets say the first and third element we do this;
// const [First, , Second] = restaurant.categories;
// console.log(First, Second);

//what if we decided to switch the first and second element through not destructuring and desructuring
// let [First, , Second] = restaurant.categories;
// console.log(First, Second);

// const temp = First;
// First = Second;
// Second = temp;
// console.log(First, Second);

//Using the destructuring method
// let [First, , Second] = restaurant.categories;
// [First, Second] = [Second, First];
// console.log(First, Second);

//We can have a function return an array and
// we can immediately destruct the result into diffrent variables lets
// write a function to order food in our restaurant

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Taranti, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//we can now simply destructure this
// restaurant.order(2, 0);
const [starter, main] = restaurant.order(2, 0); //receive 2 return values from a function
console.log(starter, main);

//destructuring nested arrays
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//what if we wanted all the individual values
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
// const [p,q,r] = [8,9];
// console.log(p,q,r); // we will get undefined as the third element

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

