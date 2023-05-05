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
