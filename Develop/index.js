// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { formatWithOptions } = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {

    return inquirer.prompt([

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
            name: 'Description',
            message: 'PLease provide a brief description of your application.',
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
        }
    ]);
    
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile("./dist/READEME.md", data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File written"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions.push(promptUser());
    
}

// Function call to initialize app
init();
