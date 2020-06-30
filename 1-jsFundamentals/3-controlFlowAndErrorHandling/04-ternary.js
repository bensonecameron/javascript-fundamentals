
let num = 6;

// Ternary (condition) ? (true) : (false)

(num > 0) 
? console.log("yes") 
: console.log("nah");


// Exactly this below 
if (num > 0) { 
    console.log('yes');
} else {
    console.log("nah");
}

// Challenge, write the age if/else as a big ternary, each "if statement" it becomes its own ternary

let age = 3;

(age >= 25)
    ? console.log("yay you can rent a car")
    : (age >= 21)
        ? console.log("yay you can drink")
        : (age >= 18)
            ? console.log("you can vote")
            : console.log("sorry bout it");
