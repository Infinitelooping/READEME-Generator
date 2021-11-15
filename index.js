// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// const { formatWithOptions } = require("util");
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your application.',
    },
    {
        type: "input",
        name: "installInstruct",
        message: "Please provide installation instructions. (required)",
        validate: installInstruct => {
            if (installInstruct) {
                return true
            } else {
                console.log("Please enter instructions")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What are usage guidelines that you want for other developers to know?",
        validate: usage => {
            if (usage) {
                return true
            } else {
                console.log("Please enter guidelines")
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the license you have",
        choices: ["MIT License", "GNU GPLv3" , "GNU AGPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"],
        validate: license => {
            if (license) {
                return true
            } else {
                console.log("! Please choose a license");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Write your own contributions guidelines for other developers helping.",
        validate: contribute => {
            if (contribute) {
                return true;
            } else {
                console.log("Please add contribution guidelines.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Enter tests the users can use.",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username.",
        validate: github => {
            if (github) {
                return true
            } else {
                console.log("!!Please enter your usersame");
                return false;
            }
        }
       
    },
    {
        type : "input",
        name: "email",
        message: "Please enter an email, in case of questions",
        validate: (email = "") => {
            if (email.includes("@")) {
                return true;
            } else {
                console.log("!!This doesn't look like an email, be sure to include a @. Enter an email again");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

        return fs.writeFileSync(fileName, data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeToFile("README.md", generateMarkdown({...answers})) //spread op ... brings all the data
    })
    
}

// Function call to initialize app
init();
