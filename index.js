// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//require this to read and write my ReadME file
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    name: 'usage',
    validate: (value) => {if(value){return true} else {return 'Please enter the instructions needed for your project.'}}
  },
  
  {
    type: "list",
    message: "If any, what license(s) does your project use?",
    name: "license",
    choices: ['The MIT License', 'GNU GPL v2', 'Apache License', 'ISC License', 'The Unlicense', 'N/A'],
    validate: (value) => { if(value){return true} else {return 'Please select an option to continue. If your project has no license select the N/A option.'}}
  },
  
  {
    type: 'input',
    message: 'Please enter the guidlines on how you would like other developers to contribute to your application.',
    name: 'contributing',
    validate: (value) => {if(value){return true} else {return 'Please enter the tests for your application to continue.'}}
  },
  
  {
    type: 'input',
    message: 'Enter the tests for your application. Then provide examples on how to run them.',
    name: 'tests',
    validate: (value) => {if(value){return true} else {return 'Please enter the tests for your application to continue.'}}
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
    name: 'email',
    validate: (value) => {if(value){return true} else {return 'Please enter your email address to finish your README.md file.'}}
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
       console.log('README.md file was created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
      let projectInfo = generateMarkdown(data)
      writeToFile('README.md', projectInfo)
  }).catch(function(err) {
      console.log(err)
  });
}

// Function call to initialize app
init();
