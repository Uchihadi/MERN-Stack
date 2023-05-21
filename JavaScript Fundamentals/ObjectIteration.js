var empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
};

// To get Property Names
console.log ("Property Names: ")
for (let property in empOne){
    console.log (property);
}

// To get the values of Property
console.log ("Property Values:")
for(let property in empOne){
    console.log(empOne[property]);
}

// To get the values of Property using Object.values()
console.log("Property values using Object.values():")
console.log(Object.values(empOne));
