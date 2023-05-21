class Employee {
    constructor (id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    swipeIn() {
        console.log ("Employee " + this.id + "has swiped in at " + new Date());
    }

    // Static method can be called only by using class name
    static code(){
        console.log("Employee is coding");
    }
}

// Child class can inherit all properties of Parent Class (Employee)
class PartTimeEmployee extends Employee {
    constructor (id, name, age, contractPeriod){
        super (id, name, age);
        this.contractPeriod = contractPeriod;
    }
}

e1 = new Employee (100, "Mark", 23);
e2 = new PartTimeEmployee (101, "Jane", 34, 3);
PartTimeEmployee.code();
e2.swipeIn();
console.log(e2.contractPeriod);