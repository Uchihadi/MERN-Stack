// Creation of Try-Catch & Finally Block
// Program to check whether string has '$' symbol in it
// If name has $ symbol then function throws error

function validateName(name) {
    try {
        if (name.match(/\$/)) {
              throw new Error("Name should not contain $");
        }
        else {
            return true;
        }
    }
    catch (error) {
            console.log(error.message);
    }
    finally{
        console.log("Cleaning up resources");
    }
}
validateName("Hello$");