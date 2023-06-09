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


////////////////// Looping Objects: Object keys, Values and Enteries ////////

// //Property NAMES
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openDays = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(restaurant.openingHours)) {
//     openDays += `${day} ,`;
// }
// console.log(openDays);

// //Property VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);
// for (const { open: openingTime, close: closingTime = [] } of values) {
//     console.log(openingTime, closingTime);

// }

// //Property ENTRIES
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open: o, close: c }] of entries) {
//     console.log(day, o, c);

// }


///////////////////////// Sets: Data Types /////////////////////////////////

// // //set is collection of non-repetitve data-types
// // const firstSet = new Set([2, 3, 4, 2]);
// // console.log(typeof ordersSet, ordersSet); //set is a also a object

// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Rissotto',
//     'Pasta',
//     'Pizza',
// ]);

// console.log(ordersSet);

// console.log(ordersSet.size, 'Items to be prepared for the order', ...ordersSet); //it also destructable and iterables
// // console.log(ordersSet.size);

// console.log(new Set('Nikhil'));

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread')

// console.log(ordersSet.has('Garlic Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Rissotto');

// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Restaurant Example
// const staffs = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = new Set(staffs);
// console.log(staffUnique);
// console.log(staffUnique.size);

// console.log(new Set('Nikhil Sahu'), new Set('Nikhil Sahu').size);


// //////////////// Maps: The Fundamental /////////////////////

// // Same as object collection of key-value pairs...Only difference is Key can be of any dataType
// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy'); //Not only set the key-value pairs but also returns the Map
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Rosticceria', 'Bar'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are Open :D')
//     .set(false, 'We are closed :(');

// console.log(rest.get('categories'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21; //

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //Methods
// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2]
// // rest.set([1, 2], 'trialArr');
// // console.log(rest.get([1, 2])); //Not the same (Search primitve,object and heap,stack memory)
// rest.set(arr, 'trialArr');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading'); //Remember DOM is not part of JS it's
// // console.log(rest.get('h1'));


// ////////////// Maps Iteration //////////////////

// const question = new Map([
//     ['question', 'Which is the best programming language in the world?'],
//     [1, 'C++'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     [4, 'Python'],
//     ['correct', 3],
//     [true, 'Correct Answer 🎉'],
//     [false, 'Try Again 😕'],
// ]);

// // console.log(question);

// // //Convert OBJECTS into MAPS
// // console.log(Object.entries(restaurant.openingHours));
// // const hoursMap = new Map(Object.entries(restaurant.openingHours));
// // console.log(hoursMap);


// ////Quiz app
// console.log(question);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
// }

// const answer = 3 //Number(prompt('Enter the answer: '))
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// ////convert map to ARRAY
// console.log(...question);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);


// ///////////////////// Working With Strings - Part 1 ///////////////////////

// const airline = 'Tap Air Portugal'
// const plane = 'A320'

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// // Slice Method

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));

// const checkMiddleSeat = function (seatNo) {
//     // B and E are middle seats
//     const s = seatNo.slice(-1);
//     if (s == 'B' || s == 'E') console.log('You got middle seat..!🫥');
//     else console.log('You got lucky..!🎉');

// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// checkMiddleSeat('9E');

// // since String is a primitive datatype we cannot alter or do operations on the string, so when we use methods
// // js build a copy of a that string into object data structure and let us do operations on primitive datatypes
// console.log(new String('Nikhil'));
// console.log(typeof new String('heynikhil07@gmail.com'));

// console.log(typeof new String('Chicku').slice(-1), new String('Chicku').slice(0, -1));


// /////////////////////////// Working With Strings: Part 2 /////////////////////////////////

// const airline = 'Tap Air Portugal';

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// //fixing names string
// const fixPassengersName = (passName) => {
//     return passName.slice(0, 1).toUpperCase() + passName.slice(1).toLowerCase();
// };
// console.log(fixPassengersName('nIkhIL'));

// //comparing email
// let emailId = ' HeyNiKhIl07   @Gmail.com  \n';

// const fixEmail = (email) => {
//     return email.toLowerCase().replace(/\s+/g, '').trim();
// };

// console.log(fixEmail(emailId));

// //Replacing strings
// const priceGB = '288,97£';
// const priceIND = (priceGB.replace(',', '.').replace('£', '$'));

// const convertGbToINR = (priceInGB) => {
//     const currencyNum = Number(priceInGB.replace(',', '.').replace('£', ''));
//     const InrValue = (currencyNum * 102).toFixed(2);
//     return '₹' + InrValue;
// }

// console.log(convertGbToINR(priceGB));

// const announcement = 'All Passengers come to boarding door 23. Boarding door 23.';
// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane = 'AirBus A320neo';
// console.log(plane.includes('A320') && plane.includes('boeing'));
// console.log(plane.startsWith('AirB'));
// console.log(plane.endsWith('neo'));

// if (plane.startsWith('AirBus') && plane.endsWith('neo')) {
//     console.log('The bus is a part of NEW AIRBUS FAMILY..!');

// }


// const checkBaggage = function (baggage) {
//     const illigalItems = baggage.toLowerCase().includes('knife') || baggage.toLowerCase().includes('gun');
//     illigalItems ? console.log('You are NOT allowed on board..!') : console.log('Welcome aboard..!');

// }
// checkBaggage('I have a laptop, some Food and a pocket kniFe.');
// checkBaggage('Socks and camera.');
// checkBaggage('Got some snacks and a gUn for protection.')


// /////////////////// Working With String- Part #3 ////////////////////

// //Split and Join methods
// console.log('Once+upon+a+time'.split('+')); // returns array of characters separated by character in split method
// console.log('Nidhi sahu'.split(' '));

// const [firstName, lastName] = 'Nidhi sahu'.split(' ');
// const fullName = `Miss ${firstName} ${lastName}`
// console.log(fullName);

// const newName = ['Mr.', 'hikaru', lastName.toUpperCase()].join(' ');

// console.log(newName);


// const capitalizeName = function (passName) {
//     const capitalizeNameArr = [];
//     for (const n of passName.split(' ')) {
//         // capitalizeNameArr.push(n.slice(0, 1).toUpperCase() + n.slice(1));
//         capitalizeNameArr.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(capitalizeNameArr.join(' '));

//     //...
// }
// capitalizeName('nidhi pidhhi dayan chudail');
// capitalizeName('bobby fisher');
// capitalizeName('mr. nakamura');

// //Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '*'));
// console.log(message.padStart(20, '*').padEnd(26, '*'));

// const maskedCrediential = function (aadharNum) {
//     // const strAadhar = aadharNum + ''; //const strAadhar = String(aadharNum);
//     // const lenAadhar = strAadhar.length;
//     // console.log(strAadhar.replace(strAadhar.slice(0, lenAadhar - 4), '#'.repeat(lenAadhar - 4)));

//     const strAadhar = aadharNum + '';
//     console.log(strAadhar.slice(-4).padStart(strAadhar.length, '#'));
// }

// maskedCrediential(358877549050);
// maskedCrediential('5625325486214');
// maskedCrediential(4563887199524896);

// //Repeat
// const messageRepeat = 'Bad Weather... All Departures Delayed... \n';
// console.log(messageRepeat.repeat(5));

// const planesInLine = numPlanes => {
//     console.log(`There are ${numPlanes} planes in line ${'✈️ '.repeat(numPlanes)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);
// planesInLine(7);

// // concat method used to add more than two strings into one...
// console.log('Hello'.concat('world', 'everyone'));

// //Google and research many more string methods in Javascript


// //////////////////// String Methods Practice ////////////////////////

// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)


// const flightsDetails = function (flightDetail) {
//     const individualFlight = flightDetail.split('+')
//     const getCode = (str) => str.slice(0, 3).toUpperCase();
//     for (const f of individualFlight) {

//         const particularflightDetail = f.split(';')
//         const [situation, board, destination, time] = particularflightDetail;
//         const textOuput = `${situation.includes('Delayed') ? '🔴' : ''}  ${situation.replace(/_/g, ' ')} from ${getCode(board)} to ${getCode(destination)} (${time.replace(':', 'h')})`;
//         console.log(textOuput.padStart(45));

//     }
// };

// flightsDetails(flights);

