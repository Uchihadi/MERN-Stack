// Object Data
const studentData = {
    name: "Jak",
    age: 24,
    angel: "abd",
    marks: 60
}

// Giving the array of entire values from the Object Data
const values = Object.values(studentData)
console.log("values: ", values);

// Printing out the values of each property from the Object Data using the '.'
console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.angel);

// Printing out the values of each property from the Object Data using the [""] to connect object data to property
console.log(studentData["name"]);
console.log(studentData["age"]);

// Iterating out each property and values from the Object using the for-let
for (let prop in studentData) {
    console.log("Value for " + prop + " is " + studentData[prop]) //1) Property & 2) Value
}
