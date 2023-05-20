function welcome() {console.log("Hello World")} //Functions as param
function goodbye() {console.log("See you later")} //Functions as param

function greet(choice) {
    choice();
}

greet(welcome)
greet(goodbye)