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

//forEach looping
const anime = ["Naruto", "Goku", "Ichigo", "Luffy"]

const eachcharacter = anime.forEach (
    function(character) {
        console.log("Name " + character)
    }
)

console.log(eachcharacter)

const filteredArray = anime.filter (
    function(character) {
        if (character.includes("uto")){
            return true // Returns the data that meets condition
        }
        return false
    }
)

const filteredArray2 = anime.filter (
    function(character) {
        if (character.length>5){
            return true // Returns the data that meets condition
        }
        return false
    }
)

const filteredArray3 = anime.filter (
    function (character) {
        if (character.includes("Uchiha")){
            return true
        }
        return false // Returns an empty Array
    }
)

console.log("filteredArray: ", filteredArray)
console.log("filteredArray2: ", filteredArray2)
console.log("filteredArray3: ", filteredArray3)