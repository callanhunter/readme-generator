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
        message: "Who are the contributors on the project?",
        type: "input",
        name: "credits",
    },
    {
        message: "What is the license for this project?",
        type: "list",
        name: "license",
        choices: ["MIT", "BSD 3-clause", "Apache 2.0", "GNU GPL v2", "None"]
    },
    {
        message: "Would you like to write any tests?",
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
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success!!")
        }
    })
}   

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("newREADME.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init()
