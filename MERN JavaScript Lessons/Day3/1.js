let empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@infy.com",
   swipeIn(){
     console.log("Swipe In by "+this.name)
     
   }
};

let empTwo = {
    name : "John",
    age : 12
};
let { a, ... rest }  = empTwo
console.log(a,rest)

try {
    try {
      throw new Error('oops');
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error(ex.message);
  }