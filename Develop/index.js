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
    }
];

// const promptUser = () => {

//     return inquirer.prompt([

//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of your project? (required)',
//             validate: title => {
//                 if (title) {
//                     return true;
//                 } else {
//                     console.log('Please enter your name!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'Description',
//             message: 'PLease provide a brief description of your application.',
//         },
//         {
//             type: "input",
//             name: "installInstruct",
//             message: "Please provide installation instructions. (required)",
//             validate: installInstruct => {
//                 if (installInstruct) {
//                     return true
//                 } else {
//                     console.log("Please enter instructions")
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "checkbox",
//             name: "license",
//             message: "Please choose the license you have",
//             choices: ["lic1", "lic2", "lic3", "lic4"],
//             validate: license => {
//                 if (license) {
//                     return true
//                 } else {
//                     console.log("! Please choose a license");
//                     return false;
//                 }
//             }
//         }
//     ]);
    
// };

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
