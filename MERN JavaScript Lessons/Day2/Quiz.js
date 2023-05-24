// Quiz 1
var i=true;
var j=false;
var k=true;
if( i || J && K){
    a=10;
    b="True";
}
else {
    a=20;
    b="False";
}
console.log(a+","+b);

// Quiz 2
// var package;
// console.log("Package: " + package)
// console.log("Amount: " + amount);

// Quiz 3
function validateTravellerPassword(password) {
    for (i = 0; i < password.length; i++) {
    }
}

function validateTravellerName(name) {
    console.log("The value of i is "+i);
    for (i = 0; i < name.length; i++) {
    }
}

validateTravellerPassword("12345");
validateTravellerName("Jack");

// Quiz 4
var discount = 10;
var amount = 1000;
function changeValues() {
    var discount = 15;
    amount = 1200;
    console.log("In discount: " + discount);
    console.log("In amount: " + amount);
}
changeValues();
console.log("Out discount: " + discount);
console.log("Out amount: " + amount);

// Quiz 5
var disc = 10;
var amount = 1000;
if(true) {
    var disc = 15; //function scoped to override disc
    amount = 1200;
    console.log("In disc: " + disc);
    console.log("In amount: " + amount);
}
console.log("Out disc: " + disc);
console.log("Out amount: " + amount);