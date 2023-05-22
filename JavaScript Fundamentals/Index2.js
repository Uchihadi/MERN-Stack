// Global Scope
var marks = 90 
var name = "Jack"

function displayMarks() {
    // Local Scope
    if (true) {
        var name = "Mike" // function scoped
        let age = 23 // block scoped
        console.log("Age: ", age)
    }

    var marks = 120
    console.log("Name inside the function: ", name)
    console.log("Marks inside the function: ", marks)
    // console.log("Age: ", age) <-- Block Scoped
}

displayMarks()
// console.log("Outside name: ", name)
console.log("Marks outside function: ", marks)

// Usage of Let
let charfav = "Itachi" // Cannot access char fav before initialisation
console.log("Favourite Character:", charfav)

if(-22){
    console.log("True")
}

// Usage of Constant Object in JavaScript
const data = {
    name1 : "Uchihadi",
    number2 : 222
}

console.log(data.name1)

// Usage of Constant Array in JavaScript
const narutochar = ["Naruto", "tachi", "Madara", "Kakashi"]
console.log(narutochar[1])