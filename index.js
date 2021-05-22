const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: "input",
        name: "manager",
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
        name: "office number",
        messsage: "Enter your office number:"
    } ]

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
    name: "intern-github",
    message: "Enter interns gihub:"
} ]

const engineerQuestions = [{
    type: "input",
    name: "engineer-name",
    message: "Enter engineers name:"
}, {
    type: "input",
    name: "engineer-id",
    message: "Enter engineers ID:"
}, {
    type: "input",
    name: "engineer-github",
    message: "Enter engineers gihub:"
} ]

inquirer.prompt(promptArr).then()
    
