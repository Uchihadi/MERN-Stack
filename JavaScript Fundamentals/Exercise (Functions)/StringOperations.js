function stringoperations (string) {
    var string1 = string;
    var uniql = "";

    for (var x = 0; x < string1.length; x++) { // Iterates each character in the string
        
        if (uniql.indexOf(string1.charAt(x)) == -1) { // At this point it will check if the character has appeared before
            uniql += string1[x] 
        }
    }
    return uniql;
}

operations = stringoperations("thequickbrownfoxjumpsoverthelazydog");
console.log(operations);