const students = [
    {
        name : "Naruto",
        marks : 60,
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

const newStudents = students.map(
    function(student){
        return student.name;
    }
)

console.table(newStudents)

//Transforms students array of object into an arrays of objects with nAMES
// Capitalised and having new property animeName with value Naruot