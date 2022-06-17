const fs = require('fs');
const inquirer = require('inquirer');

const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},

{
    type: 'input',
    message: 'What is your position?',
    name: 'position',
},

{
    type: 'input',
    message: 'What is your Identification Number?',
    name: 'identification',
},

{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
]
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
});