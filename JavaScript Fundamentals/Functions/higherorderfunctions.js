function greet() {
    var hello = function welcome() {console.log("Hello World");}
    return hello;
}

var returnFunction = greet(); // A variable for a function
returnFunction(); //Returning a function from the variable