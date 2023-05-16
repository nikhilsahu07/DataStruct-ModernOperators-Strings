'use strict';

//Destructing Arrays

const restaurant = {
    restaurantName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Rosticceria', 'Bar'],
    starterMenu: [
        'Focaccia',
        'Bruschetta',
        'Garlic Bread',
        'Burrata',
        'Carpese Salad'
    ],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
        console.log(`Food ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}..!`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here's your pasta with ${ing1}, ${ing2} and ${ing3}...!`);
    },

    orderPizza: function (mainIngredient, ...restIngredients) {
        // console.log(restIngredients);
        console.log(`Here's your delicious pizza with ${mainIngredient} ${restIngredients.length ? `${restIngredients}` : `pizza with oregeno and chilli flakes`}..!`);
    },
};

// const arr = [1, 2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2]
// console.log(a, b, c);
// console.log(a, c);


// const [a, b] = arr;
// console.log(a, b);
// const [a, , c] = arr;
// console.log(a, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// secondary = temp;
// console.log(main, secondary);

//assigning new values to the variable from the old variables' values
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(3, 0));
// const [starterDish, mainDish] = restaurant.order(3, 0);
// console.log(starterDish, mainDish);

//nested destructing
// const nested = [8, 5, [7, 3]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values destructing
// const answers = ['Yes', 'Yes', 'Yes'];
// const [a = 'No', b = 'No', c = 'No', d = 'No'] = answers; //setting default values to the variables
// console.log(a, b, c, d);


/////////////////////////////////////////
//Destructing Objects

// const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);

// const { restaurantName: labelName, openingHours: hours, categories: foodCategories } = restaurant;
// console.log(labelName, hours, foodCategories);

//Mutating data of variables
// let a = 111;
// let b = 999;

// const obj = {
//     a: 11,
//     b: 99,
//     c: 77,
// };

// ({ a, b } = obj); //use of small brackets cause js thinks parenthesis as a expressions not declarations
// console.log(a, b);

//Default Values
// const { complimentryDrink = [], starterMenu: starters = 4, mainMenu = [] } = restaurant;
// console.log(complimentryDrink, starters, mainMenu);

//Nested object destructing

// const {
//     openingHours: {
//         fri: {
//             open: o,
//             close: c
//         }
//     }
// } = restaurant;

// console.log(o, c);

//calling keys of objects in a functions parameters
//so that sequence of parameters should not be remembered
//we do so in bunch of parameters in js

// restaurant.orderDelivery({
//     time: '16:12',
//     address: 'Via del sole, 21',
//     mainIndex: 1,
//     starterIndex: 3,
// });


//////////// The Spread Operators (...) ////////////////

// const arr = [4, 8, 3, 9];

// //normal way of doing it
// const newArr = [2, 3, arr[0], arr[1], arr[2], arr[3]];
// console.log(newArr);

// //Using (...) Spread Operator
// const newArray = [2, 3, ...arr];
// console.log(newArray);
// console.log(...arr);

// //Copy Array
// const copyMainMenu = [...restaurant.mainMenu];
// console.log(copyMainMenu);

// //Joining two or more Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets, Not Objects
// const str = "Nikhil";
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} are letters in my name...`); //cause an error

// //Restaurant example
// const ingredients = [
//     // prompt("Let's make my pasta with igredients 1..?"),
//     // prompt("Make my pasta with ingredients 2..?"),
//     // prompt("Make my pasta with ingredients 3..?"),
// ];

// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurant = { founded: 1998, ...restaurant, founder: 'Guiseppe', };

// const copyRestaurant = { ...newRestaurant };
// copyRestaurant.restaurantName = 'Ristorante Roma'; //can change keys inside the objects and original would remain intact
// console.log(copyRestaurant.restaurantName);
// console.log(newRestaurant.restaurantName);


///////////////// Rest Pattern and Parameters ////////////////////

// // SPREAD, because on RIGHT side of =
// const arr = [5, 9, 4, ...[3, 1]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [2, 9, 7, 8, 1, 0]; //returns a array of rest elements in a literal
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherDishes] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu
// ]; //Rest operator must be the last element
// console.log(pizza, rissoto, otherDishes);

// //Objects

// const { sat, ...weekdays } = restaurant.openingHours
// console.log(sat, weekdays);

// //Functions
// function add(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);

// };

// add(2, 4);
// add(3, 5, 1);
// add(5, 7, 9, 1);
// add(3, 6, 1, 9, 3, 8, 2);

// const x = [5, 3, 1, 9, 5];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'rosemerry');
// restaurant.orderPizza('Chicken Tikka');
