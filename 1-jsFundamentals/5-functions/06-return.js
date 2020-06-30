
let returnToSender = () => {
    return "Not Here";
}

let value = returnToSender();

console.log(value)

let what = () => console.log("What happens");

let hmm = what();

console.log(hmm);

// Concise body (fat arrow) means implicit return 

function whatCanIDo () {
    return 6;
}
