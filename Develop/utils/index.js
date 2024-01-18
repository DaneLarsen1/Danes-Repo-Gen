const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Adjust the path if necessary

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        }
        console.log("Successfully wrote to " + fileName);
    });
  }
  
  function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

init();
