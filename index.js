// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
        message: "What is the title of your project?",
        type: "input",
        name: "title",
    },
    {
        message: "Write a description about your project?",
        type: "input",
        name: "description",
    },
    {
        message: "What instillation is required for users to use your application?",
        type: "input",
        name: "instillation",
    },
    {
        message: "What is the license for this project?",
        type: "list",
        name: "license",
        choices: []
    },
    {
        message: "Are there any other contributors on the project?",
        type: "input",
        name: "contributors",
    },
    {
        message: "table of contents",
        type: "input",
        name: "table of contents",
    },
    {
        message: "usage?",
        type: "input",
        name: "usage",
    },
    {
        message: "tests?",
        type: "input",
        name: "tests",
    },
    {
        message: "What is your Github username?",
        type: "input",
        name: "questions",
    },
    {
        message: "What is your Email Address?",
        type: "input",
        name: "questions",
    },

] 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Your README has been generated!")
    )
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
