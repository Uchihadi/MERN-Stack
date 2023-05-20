placesToVisit= ["Paris", "New York",  "Switzerland"];
function filterPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}

filteredPlaces = placesToVisit.filter(filterPlaces);
console.log(filteredPlaces);

// Arrow Function for filter()
placesToVisit = ["Paris", "New York",  "Switzerland"];
filteredPlace = placesToVisit.filter(place => place.length > 5);
console.log(filteredPlace);
// [ 'New York', 'Switzerland' ]
