const fs = require('fs');

function fileAppend() {
    let str = "Hey there.. ";
    fs.appendFile('./log.txt', str + "At: " + new Date().getFullYear(), function(err) {
        if (!err)
        console.log('Data Appended!');
        else
        throw err;
    })
}

fileAppend();