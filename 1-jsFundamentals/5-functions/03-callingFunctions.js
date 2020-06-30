
function hi() {
    console.log("Ayo");
}

hi();
hi;
console.log(hi);
console.log(hi());

// Create a function that when <b>invoked<b> lists out the numbers between 1 - 10;

let printNumbers = function() {
    for (let i=1; i < 10; i++) {
        console.log(i);
        }
}

printNumbers ()

console.log(printNumbers);

// IIFE 
(function (){  console.log ("why is this working") }) ();