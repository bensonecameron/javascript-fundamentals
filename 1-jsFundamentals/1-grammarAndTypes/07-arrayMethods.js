
let coffee = ["espresso", "nitro cold brew", "cappuccino", "americano", "cappuccino", "frappuccino"];

console.log(coffee[2]);

let verybest = coffee.pop();
console.log(verybest);

console.log(coffee);

coffee.push("latte");

console.log(coffee);

// Stack (LIFO) stack of pancakes
    // array.pop();
    // array.push(<item>);


// Que (FIFO) line for airplane 
    // array.shift();
    // array.unshift(<item>);

let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

coffee.unshift("instant", "drip");

console.log(coffee);

console.log(coffee.indexOf("cappuccino"));

// if indexof returns something other than -2, keep looking but keep the number that comes back

coffee.forEach((item) => { //for each item in the Array do this thing
    console.log(item.length);
}); 


