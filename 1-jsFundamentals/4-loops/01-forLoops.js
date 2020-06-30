
// For loop controller ie: in the "(1 ; 2 ; 3)"
// pos1: variable declaration and/or initialization
// pos2: Condition to run the loop (needs to be true)
// pos3: Incrementation or change - this should allow the condiiton to fail

for (let i = 0; i < 10; i++) {
    console.log("nice");
    // increment i
    // verify conditional (hop up if true, leave if false)
    // the for loop requires 3 variables, ""
}

// challenge: using a for loop, console log from 0 - 20 counting by 2s

for (let z = 2; z <= 20; z += 2) {
    console.log(z);
}

// Count from 10 to 0

for (let z = 10; z >= 0; z--) {
    console.log(z);
}


let name = "Patrick";

let pCharacter = name[0];
console.log(pCharacter)

// Challenge: 
// Use a for loop, create a name variable, console log each character indivially


let challenge = "Cameron Benson";

for (let x=0; x < challenge.length; x++) {
    console.log(challenge[x]);
}

console.log("xxxxxxxxxxx");

for (let c of challenge) {
    console.log(c);
}

console.log("example for total")

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i =0; i < invoice.length; i++) {
    total =  total + invoice[i];
}

console.log(total);


console.log("example for total with for of loop")
