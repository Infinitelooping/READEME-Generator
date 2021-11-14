// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { formatWithOptions } = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
        type: "checkbox",
        name: "license",
        message: "Please choose the license you have",
        choices: ["lic1", "lic2", "lic3", "lic4"],
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
