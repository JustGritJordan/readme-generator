// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of teh project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter your itle for your project");
          return invalid;
        }
      },
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
