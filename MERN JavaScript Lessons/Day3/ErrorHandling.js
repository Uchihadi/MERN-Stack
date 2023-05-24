function add (n1, n2) {
    if(typeof n1 == "number" && typeof n2 == "number") {
        return n1+n2
    }

    throw new Error ("Invalid Data Type")
}

let result = 0

try {
    result = add(13,56)
} catch(error) {
    console.log("My Error: ", error.message)
} finally {
    console.log('Result: ', result)
}

// const result = add (13, "56")
console.log ('Result: ', result)