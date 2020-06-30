
let student = { 
    name: "Gloria",
    awesome: true,
    specialty: "javaScript",
    week: 1
}

console.log(student.name);
console.log(student["awesome"]);

for (x in student ) {
    console.log(x);
}

console.log("xxxx")

for ( x in student ) {
    console.log(student[x]);
}


// For-in-loop will return to you the KEYS of some collection, used when something that is repeated
