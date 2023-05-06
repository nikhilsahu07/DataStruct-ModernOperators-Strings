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
    }

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

