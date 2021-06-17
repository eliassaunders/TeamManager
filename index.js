const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const fs = require('fs');

var wipeFunction = function() {
    const base = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/styles.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            integrity="undefined" crossorigin="anonymous">
        <title>Team Manager</title>
    </head>
    
    <body>
        <header>
            <nav>
                <h1 class=".navbar-brand">Team Manager</h1>
            </nav>
        </header>
        <div>`

    fs.writeFile('./dist/index.html', base, (err) => {
        if (err) {
            console.error;
        }
    })
}

const closeOut = `
</div>
</body>

</html>
`;

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter team manager name:"
    }, {
        type: "input",
        name: "id",
        message: "Enter your employee ID"
    }, {
        type: "input",
        name: "email",
        message: "Enter your email"
    }, {
        type: "input",
        name: "office",
        messsage: "Enter your office number:"
    }, {
        type: "list",
        name: "choice",
        message: "Do you want to add employees?",
        choices: ["Engineer", "Intern", "End addtions"]
    }];

const addQuestion = [{
    type: "list",
    name: "choicing",
    message: "Do you want to add employees?",
    choices: ["Engineer", "Intern", "End addtions"]
}];


const internQuestions = [{
    type: "input",
    name: "name",
    message: "Enter interns name:"
}, {
    type: "input",
    name: "id",
    message: "Enter intern ID:"
}, {
    type: "input",
    name: "email",
    message: "Enter your email"
}, {
    type: "input",
    name: "school",
    message: "Enter interns school:"
}]

const engineerQuestions = [{
    type: "input",
    name: "name",
    message: "Enter engineers name:"
}, {
    type: "input",
    name: "id",
    message: "Enter engineers ID:"
}, {
    type: "input",
    name: "email",
    message: "Enter your email"
}, {
    type: "input",
    name: "github",
    message: "Enter engineers gihub:"
}]

wipeFunction();
inquirer.prompt(questions).then(answers => {

    var returnFunc = function () {
        inquirer.prompt(addQuestion).then(addAnswers => {
            if (addAnswers.choicing === "End additions") {
                fs.readFile('./dist/index.html', function(err, phaseOfPage) {
                    if(err) {
                        console.error;
                    }
                    fs.writeFileSync('./dist/index.html', phaseOfPage + closeOut, (err) => {
                        if (err) {
                            console.error;
                        }
                        console.log("file written successfully");
                    })
                })
            }
            if (addAnswers.choicing === "Engineer") {
                inquirer.prompt(engineerQuestions).then(eAnswers => {
                    let engineerClass = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.github);
                    fs.readFile('./dist/index.html', function(err, phaseOfPage) {
                        if(err) {
                            console.error;
                        }
                        fs.writeFileSync('./dist/index.html', phaseOfPage + engineerClass.renderCard(), (err) => {
                            if (err) {
                                console.error;
                            }
                            console.log("file written successfully");
                            
                        })
                    })
                    returnFunc();
                })
            }

            if (addAnswers.choicing === "Intern") {
                inquirer.prompt(internQuestions).then(iAnswers => {
                    let internClass = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.school)
                    fs.readFile('./dist/index.html', function(err, phaseOfPage) {
                        if(err) {
                            console.error;
                        }
                        fs.writeFileSync('./dist/index.html', phaseOfPage + internClass.renderCard(), (err) => {
                            if (err) {
                                console.error;
                            }
                            console.log("file written successfully");
                            
                        })
                    })
                    returnFunc();
                })
            }
        })
    }

    if (answers.choice === "End additions") {
        fs.readFile('./dist/index.html', function(err, phaseOfPage) {
            if(err) {
                console.error;
            }
            fs.writeFileSync('./dist/index.html', phaseOfPage + closeOut, (err) => {
                if (err) {
                    console.error;
                }
                console.log("file written successfully");
                
            })
        });   
    }
    if (answers.choice === "Engineer") {
        inquirer.prompt(engineerQuestions).then(eAnswers => {
            let engineerClass = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.github);
            fs.readFile('./dist/index.html', function(err, phaseOfPage) {
                if(err) {
                    console.error;
                }
                fs.writeFileSync('./dist/index.html', phaseOfPage + engineerClass.renderCard(), (err) => {
                    if (err) {
                        console.error;
                    }
                    console.log("file written successfully");
                    
                })
            })
            returnFunc();

        })
    }
    if (answers.choice === "Intern") {
        inquirer.prompt(internQuestions).then(iAnswers => {
            let internClass = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.school)
            fs.readFile('./dist/index.html', function(err, phaseOfPage) {
                if(err) {
                    console.error;
                }
                fs.writeFileSync('./dist/index.html', phaseOfPage + internClass.renderCard(), (err) => {
                    if (err) {
                        console.error;
                    }
                    console.log("file written successfully");
                    
                })
            })
            returnFunc();
        })
    }

    let manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    fs.readFile('./dist/index.html', function(err, phaseOfPage) {
        if(err) {
            console.error;
        }
        fs.writeFileSync('./dist/index.html', phaseOfPage + manager.renderCard(), (err) => {
            if (err) {
                console.error;
            } else {
                console.log("success");
            }
        })
    })
})
