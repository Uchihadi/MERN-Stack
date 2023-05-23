function info() {
    // Fname is a global variable as no keyword is being used
    fname = "Hadi"
}

info()
console.log("Name: ", fname) // Once fname is declared in function block, you will be able to call the variable ONLY after calling the function 

const fruitea = ["Appletea", "Mangotea", "Greentea"]

for (i = 0; i < fruitea.length; i++){
    console.log(fruitea[i])
}