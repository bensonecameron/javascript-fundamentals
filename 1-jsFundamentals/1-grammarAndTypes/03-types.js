// Booleans
let isOn = true;

let isRaining = false;

// NULL
let empty = null;

// Undefined "data type"
let udef = undefined;
console.log(udef);

let whatAmI;
console.log(whatAmI);

// Numbers "data type"

let degrees = 90;
console.log(degrees);

let ratherLarge =(999999999999999); // this is 15 nines
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; // this is 16, nines

console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 + 10 ) / 10;
console.log(numbersAreHard);

let created = Number('123'); // Turn 123 into the number 123
console.log(created);

// Strings "data type"
let stringOne = "doublydoos";
let stringTwo = 'singlydoos';

let first = 1050 + 100;
let second = "1050" + 100;
let third = 1050 + "100";
let last = "1050" + "150";
console.log(first,second,third,last);

let firstName = "Cameron";
let lastName = "Benson";
console.log(firstName +  lastName);
console.log(firstName + " " + lastName);

//escape characters "data type"
let myMessage = 'don\'t do this';
console.log(myMessage);

// Objects

let frodo = {
    race: "Hobbit",
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: "Sting",
        attack: 30,
        damage: false,
    },
    damage: 'poision',
    hunger: 5,
};

console.log(typeof frodo);

// Array 

let groceryList = [
    "banana", 
    "kiwi", 
    "coconut",
    21
];

let aThing = [23, {isOn: true, electricity: "AC"}, ["wallaby"]];

console.log(aThing instanceof Array); //use instanceof like clicking a button checking to see if the thing we entered is an Aaray 

// STRINGS: Methods

let userTitle = "a DaY in tHe lIfe of dev"
console.log(userTitle.toUpperCase());
console.log(userTitle.includes('in'));
