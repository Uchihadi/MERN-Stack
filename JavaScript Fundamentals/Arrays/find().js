placesToVisit= ["Paris", "New York",  "Switzerland"];
function findPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}

foundPlaces = placesToVisit.find(findPlaces);
console.log(foundPlaces);

// Arrow for find()
placesToVisit = ["Paris", "New York",  "Switzerland"];
findPlace = placesToVisit.find(place => place.length > 5);
console.log(findPlace);
// "New York"
