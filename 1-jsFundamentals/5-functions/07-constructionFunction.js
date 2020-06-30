
let person1 = {
    name: "Macy",
    age: 24,
    canVote: true
}

let person2 = {
    name: "Nicolas",
    age: 40,
    canVote: true
}

let person3 = {
    name: "Argyle",
    age: 15,
    canVote: false
}

function createPerson (name, age, canVote) {
    let person = {
        name: name,
        age: age, 
        canVote: canVote
    }

    return person;
}

function Person (name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

// Instances of a Person object 

