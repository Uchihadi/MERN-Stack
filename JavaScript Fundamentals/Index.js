console.log("Before assignment ", myname)
var myname = "Dhiraj"

console.log("After assignment ", myname)

greet1() // Hoisting --> Functions can be called before declaration

// greet2() --> Error as it is still in memory allocation phase
var greet2 = function greet() {
    console.log("Good Evening")
}

function greet1(){
    console.log("Good Morning")
}

greet2() // Its calling a function under the pretext of the variable since there is function declared in this variable