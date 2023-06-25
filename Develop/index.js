// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

let githubEmail = '';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your application? ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description for your application: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions for your application: ',
      name: 'installInstructs',
    },
    {
        type: 'input',
        message: 'Enter usage instructions for your application: ',
        name: 'usageInstructs',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your guidelines: ',
        name: 'contGuide',
    },
    {
        type: 'input',
        message: 'Enter test instructions for your application: ',
        name: 'testInstructs',
    },
    {
        type: 'list',
        message: 'Choose a license for your application',
        name: 'license',
        choices: ['badge1', 'badge2', 'badge3', 'badge4'],
    },
    {
        type: 'input',
        message: 'Enter your Email Address: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your Github Username: ',
        name: 'githubUserName',
    },

  ])
  .then((response) =>{
    console.log(response);
      const fileData = `
    # ${title}

    ## Description:
    ${description}

    ## Installation:
    ${installInstructs}

    ## Usage:
    ${usageInstructs}

    ## Contributing: 
    ${contGuide}

    ## Tests: 
    ${testInstructs}

    ## License:
    Application License: ${license}

    ## Questions:
    Additional Questions:
    Email: ${githubEmail}

    ## Table Of Contents
    + # description
    - # installation
    * # usage:
    + # contributing:
    - # tests:
    * # license:
    + # questions: 
      `;
      fs.writeFile('README.md', fileData, (err) =>
      err ? console.error(err) : console.log('Success!')
  );
  
    }
    );



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
