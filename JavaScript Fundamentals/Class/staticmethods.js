class Employee {
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    swipeIn(){
        console.log("Employee "+ this.id +" has swiped in at "+ new Date());
    }

    static code() {
        console.log("Employee is coding")
    }
}

// You can only call the method by its Class name
Employee.code();