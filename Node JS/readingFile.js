const fs = require('fs');

// To read the file under demo.txt
fs.readFile('demo.txt', 'utf8', (err, content) => {
    if (!err)    
    console.log(content);
    else
    throw err;
});

console.log("After Calling readFile")
