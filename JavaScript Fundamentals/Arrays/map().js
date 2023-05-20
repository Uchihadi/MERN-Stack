placesToVisit= ["Paris", "New York",  "Switzerland"];
function display_uppercase(ace) { // parameter need be defined for it to return to Upper Case
    return ace.toUpperCase();
}

placesUpparCase = placesToVisit.map(display_uppercase); //Display uppercase function is an object
console.log(placesUpparCase);

// Arrow Function for Map
placesToVisit= ["Paris", "New York",  "Switzerland"];
placesUpperCase = placesToVisit.map(place => place.toUpperCase());
console.log(placesUpperCase);
// ["PARIS", "NEW YORK", "SWITZERLAND"]
