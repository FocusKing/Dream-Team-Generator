const fs = require('fs');
const inquirer = require('inquirer');


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
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},

{
    type: 'input',
    message: 'Which type of team member would you like to add?',
    choices: 'Engineer, Intern, No more team members to add',
},
]
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    
    
});