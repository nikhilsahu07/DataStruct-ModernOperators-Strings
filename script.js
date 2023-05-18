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

    // //Enhanced object literals
    // franchiseLocation,

    weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
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


///////////// Short Circuiting (&& and ||) ///////////////

// console.log("------ OR -------");

// //Use ANY data types, return ANY data type, short circuting

// //first truthy value or the last falsy value
// console.log(7 || 'Nikhil');
// console.log(0 || 3);
// console.log('' || 0);
// console.log(false || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// // const guest2 = restaurant.numGuests || 10;
// // console.log(guest2);

// console.log("------ AND ------");

// //the first falsy values or the last truthy value
// console.log(6 && 'Nick');
// console.log('' && 7);
// console.log(null && true);
// console.log(false && 'main');

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// //Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


/////////////// Logical Assignment Operator ///////////////

// const rest1 = {
//     restName: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };

// const rest2 = {
//     restName: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

////OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

////Logical Assignment Operator OR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


////nulish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

////AND assignment operator
// rest1.owner = rest1.owner && '<-ANONYMOUS->';
// rest2.owner &&= '<-ANONYMOUS->';

// console.log(rest1.owner);
// console.log(rest2.owner);


/////////////// Looping Arrays: For-of loop /////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [index, item] of menu.entries()) { //returns an array [index, element] of the given array
//     console.log(`${index + 1}: ${item} `);

// }

//////////////// Enhanced Object literals ///////////

////ReferenceError: Cannot access 'franchiseLocation' before initialization
////Put this before te restaurnt objects
// const franchiseLocation = {
//     Milan: '21, Milan, Italy',
//     Rome: 'Street 12, Rome, Italy',
//     Venice: 'Road 7, Venice, Italy',
// };


//////////////// Optional Chaining (?.) ///////////////////

// // console.log(restaurant.openingHours.mon.open);  //cannot read the undefined property open from mon ERROR

// if (restaurant.openingHours.mon && restaurant.openingHours.mon.open) console.log(restaurant.openingHours.mon.open);

// //WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// for (const day of restaurant.weekdays) {
//     const open = restaurant.openingHours[day]?.open ?? `Closed..!`;
//     console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// const deliveryDetails = {
//     address: 'Street 12, Venice, Italy',
//     time: '12:15 PM',
//     mainIndex: 1,
//     starterIndex: 0,
// };

// (restaurant.orderDelivery?.({ ...deliveryDetails }) ?? console.log(`Method doesn't exit..!`));
// (restaurant.order?.(1, 2) ?? console.log(`Method doesn't exit..!`));
// (restaurant.orderRissoto?.('a', 'b', 'c') ?? console.log(`Method doesn't exit`));

// //Array
// const users = [{ name: 'Jonas', email: 'heyjonas07@gmail.com' }]
// // const users = []
// console.log(users[0]?.name ?? `User array Empty`);

// //Long form of above Optional chaining operator
// if (users.length > 0) console.log(users[0].name)
// else console.log(`User array Empty`);


