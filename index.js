const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const { writeFile, overFile } = require('./writefile');
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter team manager name:",
        validate: managerInput => {
            if (managerInput) {
                return true;
            } else {
                console.log("You need to enter a name.");
                return false;
            }
        }
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
    }]

const addQuestion = {
    type: "list",
    name: "choicing",
    message: "Do you want to add employees?",
    choices: ["Engineer", "Intern", "End addtions"]
};

const promptArr = [...questions, addQuestion]

const internQuestions = [{
    type: "input",
    name: "intern-name",
    message: "Enter interns name:"
}, {
    type: "input",
    name: "intern-id",
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



inquirer.prompt(questions)
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office);

        return manager.renderCard(data);
    }).then(html => { writeFile(html) })

inquirer.prompt(addQuestion).then(addData => {
    if (addData.choicing === 'End additions') {
        console.log
    } else if (addData.choicing === 'Engineer') {
        inquirer.prompt(engineerQuestions).then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

            return engineer.renderCard()
        }).then(engineerHTML => {
            console.log(engineerHTML);
        })
    } else if (addData.choicing === 'Intern') {
        inquirer.prompt(internQuestions).then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);

            return intern.renderCard(internData)

        })
    }
})



