
// "Functions" this is like console.log - or console.log is a function that is built into java 
// variables is an internal function 

let hisName = "Carson";

function someProcess() {
    const hisName = "X-AESH-12";
    console.log(hisName);
}

// console.log(myName);

// someProcess();


let y = 12;

function scopey() { 
    y = 33;
    console.log(y);
}

console.log(y);
scopey();
console.log(y);


var slope = 12;

function varTest() {
    var slope = 56;
    if (true) {
        var slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest();
console.timeLog(slope);