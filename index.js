// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



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
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'Enter your email: ',
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
# ${response.title}

## Description:
${response.description}

## Table Of Contents
+ [Description](#description)
- [Installation](#installation)
* [Usage](#usage)
+ [Contributing](#contributing)
- [Tests](#tests)
* [License](#license)
+ [Questions](#questions)
    
## Installation:
${response.installInstructs}

## Usage:
${response.usageInstructs}

## Contributing: 
${response.contGuide}

## Tests: 
${response.testInstructs}

## License:
This application is covered under the ${response.license} license.

## Questions:
Additional Questions:
Email: ${response.email}
Github: https://github.com/${response.githubUserName}
`
    ;
    fs.writeFile('genREADME.md', fileData, (err) => err ? console.error(err) : console.log('Success!')
    );
  }
);