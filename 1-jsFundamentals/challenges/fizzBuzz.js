/*

- write a for loop running between the numbers 0 - 100
- for multiples of 3, instead of the number, console.log "Fizz"
- for multiples of 5 console.log "Buzz";
- for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
- for any other number, console.log the value


*/

let threeFizz = "";

for (let z = 0; z <= 10; z++) {
    console.log(z);
}


console.log("right answer")  // order matters the fizzbuzz has to be first 

for (let i=0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0) { 
        console.log("fizzbuzz");
    }
    else if ( i % 5 === 0) {
        console.log("buzz");
    }
    else if (i % 3 === 0 ) { 
        console.log("fizz");
    }
    else {
        console.log(i);
    }
    
}

function listOneThroughTen () {
    for ( let i = 1; i <= 10; i++)
    console.log(i);
}
