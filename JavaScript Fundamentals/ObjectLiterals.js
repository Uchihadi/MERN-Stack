// Literal Objects
var empOne = {
    name : "John", // Property Name
    empNumber : 1001, // Property Name
    emailId : "John@gmail.com", // Property Name
    swipeIn() {console.log ("Swipe In by " + this.name)} // Method Name
};

// To access the properties of these objects/method
console.log(empOne.empNumber); // Invokes Property
empOne.empNumber=1002;
console.log(empOne.empNumber); // Invokes Property
empOne.swipeIn(); // Invokes Method

