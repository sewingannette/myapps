// JavaScript Document
//function getFile() {
// Requiring fs module in which 
// readFile function is defined.
	console.log("message");
const fs = require('fs');
fs.readFile('test.txt', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
	console.log(data);
    const content = data;
    processFile(content);
});

function processFile(content) {
    console.log(content);
}

//readContent(function (err, content) {
	const allLines = content.split(/\r\n|\n/);
        // Reading line by line
       // allLines.forEach((line) => {
           // console.log(line);
		   console.log(allLines);
       // });
//}

// JavaScript Document