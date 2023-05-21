// Creating a child class called PartTimeEmployee extends Employee class
class Employee {
    constructor (id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    swipeIn() {
        console.log ("Employee " + this.id + " has swiped in at " + new Date());
    }

    static code(){
        console.log("Employee is coding");
    }
}

// Child Class extends Parent Class
class PartTimeEmployee extends Employee {

}

e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee();
PartTimeEmployee.code();
e2.swipeIn(); 
// Gives undefined for the Id as we are not passing values to the parent constructor