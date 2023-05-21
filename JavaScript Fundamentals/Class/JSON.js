let empObj = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
}

// JSON
let empJson = '{"name":"John","empNumber":1001,"emailId":"John@gmail.com"}';

// parse() function converts JSON strings to JavaScript Object
var json = '{ "firstName":"John", "lastName":"Doe"}';
var nameObj = JSON.parse(json); //Converts JSON String to JavaScript Object

console.log(nameObj.firstName + " " + nameObj.lastName);

// Stringify () function converts Objects to JSON String
var jScores = {"Java": 70, "JavaScript": 80, "CSS": 30};
var tScores = JSON.stringify(jScores); // Converts Object to JSON String
console.log(typeof(jScores)); // Returns Object
console.log(typeof(tScores)); // Returns String

