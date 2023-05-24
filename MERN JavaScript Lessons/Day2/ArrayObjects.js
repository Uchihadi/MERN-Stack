const students = [
    {
        name : "Naruto",
        marks : 60
    },{
        name : "Orochimaru",
        marks : 80
    },{
        name : "Itachi",
        marks : 93
    },{
        name : "Sasuke",
        marks : 92
    }
]

const filteredArr = students.filter (
    function (students) {
        if (students.marks > 90 && students.name.includes("t")) { //students is an array; .marks is an object inside an array index
            return true // Filter and ForEach is similar. Filter returns the data that meets condition
        }
        return false
    }
)

console.log ("Students who scored more than 90: ", filteredArr)
console.table (filteredArr)