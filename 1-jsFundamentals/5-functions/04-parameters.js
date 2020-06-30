
let greeting = function (name) {
    console.log(`Hello, ${name}!`);
}

greeting("Becky");


// I/O is input out in the world of coding 

let printMyName = function(fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

printMyName("Cameron" , "Benson");


let calculateBalance = function (debits, credits) {
    // parameter debits = [ numbers ] - array of numbers 
    // parameter credits = [ number ] - array of numbers 
    let total = 0; 
    for (debit of debits) {
        total -= debit;
    }
    for (credit of credits) {
        total += credit;
    }
    console.log(total);
}

let mydeb = [150.00, 34.00, 23.98]
let mycred = [1000.00, 50.00, 25.00]

calculateBalance(mydeb, mycred);