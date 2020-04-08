const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Github username",
            name: "github_user"
        },
        {
            type: "input",
            message: "What is your Github repository",
            name: "github_repo"
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your project version",
            name: "version",
        },
        {
            type: "input",
            message: "What is your project description",
            name: "description",
        },
        {
            type: "input",
            message: "What is your project usage",
            name: "usage"
        },
        {
            type: "input",
            message: "What is your project license",
            name: "license"
        },
        {
            type: "input",
            message: "What is the project license url",
            name: "license_url"
        },
        {
            type: "input",
            message: "Who are your project contributors",
            name: "contributors"
        },
        {
            type: "input",
            message: "What is your project test command",
            name: "test"
        },
        {
            type: "input",
            message: "What email can users reach you at if they have questions?",
            name: "questions"
        },
        
      ]);
};

function generateMarkdown(response) {
    return `
    ![License shield](https://img.shields.io/github/license/${response.github_user}/${response.github_repo}) ![Repo size shield](https://img.shields.io/github/repo-size/${response.github_user}/${response.github_repo}) ![Language shield](https://img.shields.io/github/languages/top/${response.github_user}/${response.github_repo})

        ## Table of Contents
            *   Description
            *   Version
            *   Usage
            *   License
            *   Author
            *   Contributors
            *   Run test
            *   Feedback

        ## Title
            ${response.title}

        ## Description
            ${response.description}

        ## Version
            ${response.version}

        ## Usage
            ${response.usage}

        ## License
            ${response.license}
            ${response.license_url}

        ## Author
            github.com/${response.github_user}

        ## Contributors
            ${response.contributors}

        ## Run Test
            ${response.test}

        ## Feedback
            ${response.questions}
        `;
}
 
promptUser().then(function(response) {
    console.log(response);
    
    const markdown = generateMarkdown(response);

    fs.writeFile('testREADME.md', markdown, function(error) {
        if (error) {
            return console.log(error);
        } else {
            console.log('success')
        }
    });
});

