// Undefined in this case does not override the name since the name has already a value
function greeting (name = "anonymous", greeting = "Hello!") { 
    console.log(greeting + " " + name)
}

greeting (undefined, "Welcome")

// Null will override the values in this case
function greeting (name = "anonymous", greeting = "Hello!") { 
    console.log(greeting + " " + name)
}

greeting (null, "Welcome")