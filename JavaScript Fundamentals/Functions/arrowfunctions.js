function greet(choice){ 
    choice();
 } 
 
 greet(function(){ console.log("Hello World") }); // Hello World
 
 greet(()=>{ console.log("Hello World") }); // (parameter) => function
 
// Multi Parameter & Multi-Line Code
calculateCost = (ticketPrice, noOfPerson) => {
    noOfPerson = ticketPrice * noOfPerson;
    return noOfPerson;
}

console.log (calculateCost(500, 2));

// No Parameter, single line code
trip = () => "Trip to Paris"
console.log(trip());

// One Parameter with Single Line code 
trip = (place) => "Trip to " + place;
console.log(trip(place));

// One Parameter with Single Line Code
trip = _ => "Trip to " + _;
console.log(trip(place));