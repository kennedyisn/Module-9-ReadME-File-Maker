// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//require this to read and write my ReadME file
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: (value) => { if(value){return true} else {return 'Please enter a title for your project.'}}
  },
  {
    type: 'input',
    message: 'Please describe your project in a few sentences:(use these questions as a guide:What was your motivation?, Why did you build this project?, What problem does it solve?)',
    name: 'description',
    validate: (value) => { if(value){return true} else {return 'Please enter a description for your project.'}}
  },
  
  {
    type: 'input',
    message: 'Are there any installation instructions for your project?',
    name: 'installation',
    validate: (value) => { if(value){return true} else {return 'Please enter the steps needed to install your project.'}}
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'instructions',
    validate: (value) => {if(value){return true} else {return 'Please enter the instructions needed for your project.'}}
  },
  
  {
    type: "list",
    message: "If any, what license(s) does your project use?",
    name: "license",
    choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
    validate: (value) => { if(value){return true} else {return 'Please select an option to continue. If your project has no license select the N/A option.'}}
  },
  
  {
    type: 'input',
    message: 'Enter your github username.',
    name: 'github',
    validate: (value) => {if(value){return true} else {return 'Please enter your github username to continue.'}}
  },
  
  {
    type: 'input',
    message: 'Enter your email address.',
    name: 'email-address',
    validate: (value) => {if(value){return true} else {return 'Please enter your email address to finish your README.md file.'}}
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', readme, (err) => {
    if (err) {
      console.error(err);
    } else {
       console.log('README.md file was created successfully!');
      }
        
    rl.close();
  });

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
      let projectInfo = generateMarkdown(data)
      writeToFile('readMe.md', projectInfo)
  }).catch(function(err) {
      console.log(err)
  });
}

// Function call to initialize app
init();
