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
        message: "What installation is required for users to use your application?",
        type: "input",
        name: "installation",
    },
    {
        message: "Provide instructions for your application",
        type: "input",
        name: "usage",
    },
    {
        message: "Are there any other contributors on the project?",
        type: "input",
        name: "credits",
    },
    {
        message: "What is the license for this project?",
        type: "list",
        name: "license",
        choices: ["MIT", "BSD 3-clause", "Apache", "GPLv2"]
    },
    {
        message: "Would you like to write tests for your application?",
        type: "input",
        name: "tests",
    },
    {
        message: "What is your Github username?",
        type: "input",
        name: "github",
    },
    {
        message: "What is Email Address?",
        type: "input",
        name: "email",
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
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
    var userAnswer = generateMarkdown(answer);
    writeToFile(userAnswer)
    })
}

// Function call to initialize app
init();
