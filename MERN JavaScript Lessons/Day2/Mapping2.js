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

const UpperCase = students.map (
    function(student){
        return {name:student.name.toUpperCase(), marks:student.marks, animeName:"NARUTO"};
    }
)

const newStudents = students.map (
    function(student){
        const studentCopy = {...student} // triple dots to unwrap the data
        studentCopy.name = student.name.toUpperCase()
        studentCopy.animeName = "NARUTO";
        return studentCopy
    }
)

console.log(UpperCase)
console.log(newStudents)
console.table(UpperCase)

const data = {
    name: "Jack",
    age: 40
}

const data2 = data;
data2.name = "John";
console.log(data)
console.log(data2)