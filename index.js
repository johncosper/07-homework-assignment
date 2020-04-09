const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const axios = require('axios');

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

promptUser().then(async function(response) {
    console.log(response);

    const url = `https://api.github.com/users/${response.github_user}`;

    const data = await axios.get(url);
    // console.log(data)
    
    
    const markdown = generateMarkdown(response);

    fs.writeFile('testREADME.md', markdown, function(error) {
        if (error) {
            return console.log(error);
        } else {
            console.log('success')
        }
    });
});

