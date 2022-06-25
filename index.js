const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/htmlGenerator')


// managers questions
const questions = [{
    type: 'input',
    message: 'What is the team manager\'s name?',
    name: 'name',
},

{
    type: 'input',
    message: 'What is the team manager\'s Identification Number?',
    name: 'identification',
},

{
    type: 'input',
    message: 'What is the team manager\'s email?',
    name: 'email',
},

{
    type: 'input',
    message: 'What is the team manager\'s office number?',
    name: 'number',
},

{
    type: 'list',
    message: 'Which type of team member would you like to add?',
    name : 'member',
    choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your engineer\'s name?',
    name : 'engineer',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your engineer\'s id?',
    name : 'identification',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your engineer\'s email?',
    name : 'email',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your engineer\'s GitHub username?',
    name : 'github',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'list',
    message: 'Which type of team member would you like to add?',
    name : 'member1',
    choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your intern\'s name?',
    name : 'intern',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your intern\'s id?',
    name : 'identification',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your intern\'s email?',
    name : 'email',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},
{
    type: 'input',
    message: 'What is your intern\'s school?',
    name : 'school',
    // choices: ["Engineer", "Intern", "No more team members to add "],
},

{
    type: 'list',
    message: 'Which type of team member would you like to add?',
    name : 'member',
    choices: ["Engineer", "Intern", "No more team members to add "],
},
]
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generatePage(answers);
    
    
});