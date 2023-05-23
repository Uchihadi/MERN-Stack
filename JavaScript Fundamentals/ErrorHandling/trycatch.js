function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        // code for Handling error
        console.log(error.message);
    }
}
validateName("Josh")
