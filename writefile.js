const fs = require('fs');
const { resolve } = require('path');


const writeFile = data => {
    fs.writeFileSync('./dist/index.html', data, err => {
        if(err) {
            console.log(error);
        }
    })
}

const overFile = data => { 
fs.readFile("./dist/index.html", 'utf8', function (data) {
    var formatted = data.replace(/<p>placeholder<p>/g, data);
    fs.writeFile("your file", formatted, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
}
module.exports = { writeFile, overFile };