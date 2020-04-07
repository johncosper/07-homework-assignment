var inq = require('inquirer');
var fs = require('fs');

inq
  .prompt([
    {
        type: "input",
        message: "Github username",
        name: "Github user"
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
        name: "license url"
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
        console.log(response);

        var filename = 'testREADME.md'

        fs.writeFile(filename, JSON.stringify(response, null, '\t'), function(error) {
            if (error) {
                return console.log(error);
            } else {
                console.log('success')
            }
        });
    });

function init() {

}

init();
