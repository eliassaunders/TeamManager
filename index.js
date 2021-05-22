const inquirer = require('inquirer');
const fs = require('fs');
const { validate } = require('@babel/types');

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

    }]

inquirer.prompt(questions).then(console.log(""))