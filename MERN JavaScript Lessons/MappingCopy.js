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

const newStudents = students.map (
    function(student){
        const studentCopy = {...student} // triple dots to unwrap the data
        studentCopy.name.toUpperCase();
        studentCopy.animeName = "NARUTO";
        return studentCopy
    }
)

console.log(students)
console.log(newStudents)
console.table(newStudents)