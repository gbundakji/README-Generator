// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')
// const { table } = require('console');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            confirm: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please give your project a title! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project',
            confirm: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please give your project a description! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Add a table of contents to make it easy for users to find what they need',
            confirm: table => {
                if (table) {
                    return true;
                } else {
                    console.log('Please give your project a table of contents! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            confirm: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('What are the steps to install your project? ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and example for use',
            confirm: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please provide intructions for use! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'List your collaborators, creators, and/or third-party assets with their links in this section',
            confirm: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please list your collaborators! ');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose which type of license you would like to use',
            choices: ['Apache', 'Boost', 'GNU', 'IBM', 'ISC', 'MIT', 'MPL'],
            confirm: license => {
                if (license) {
                    return true;
                } else {
                    console.log('Please select a license for your project. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application and provide the examples on how to run them here',
            confirm: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please provide an example on how to run your project. ');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'questions',
            message: 'Would you like to provide your GitHub account and e-mail address?',
            choices: ['Yes', 'No'],
            confirm: questions => {
                if (questions) {
                    return true;
                } else {
                    console.log('Please answer these questions! ');
                    return false;
                }
            }
        },
        // GitHub and email address prompts
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username',
            confirm: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address so users know how to reach you for additional questions',
            confirm: questions => {
                if (questions) {
                    return true;
                } else {
                    console.log('Please enter your email address! ');
                    return false;
                }
            }
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("Your README file has been created successfully! ")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers, data) {
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers));
    });
};

// Function call to initialize app
init();