const inq = require('inquirer');
const fs = require('fs');

inq
  .prompt([
    {
        type: "input",
        message: "Github username",
        name: "github_user"
    },
    {
        type: "input",
        message: "Github repository",
        name: "github_repo"
    },
    {
      type: "input",
      message: "Project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Project version",
      name: "version",
    },
    {
      type: "input",
      message: "Project description",
      name: "description",
    },
    {
        type: "input",
        message: "Project usage",
        name: "usage"
    },
    {
        type: "input",
        message: "Project license",
        name: "license"
    },
    {
        type: "input",
        message: "Project license url",
        name: "license_url"
    },
    {
        type: "input",
        message: "Project contributors",
        name: "contributors"
    },
    {
        type: "input",
        message: "Project test command",
        name: "test"
    },
    {
        type: "input",
        message: "Where can users reach you if they have questions?",
        name: "questions"
    },
    
  ]).then(function(response) {
    const template = `
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
    var filename = 'testREADME.md'

    console.log(response);

    fs.writeFile(filename, JSON.stringify(template, null, '\t'), function(error) {
        if (error) {
            return console.log(error);
        } else {
            console.log('success')
        }
    });
});
