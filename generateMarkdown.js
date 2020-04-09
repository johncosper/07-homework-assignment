function generateMarkdown(response) {
return `
![License shield](https://img.shields.io/github/license/${response.github_user}/${response.github_repo}?style=plastic) ![Repo size shield](https://img.shields.io/github/repo-size/${response.github_user}/${response.github_repo}?style=plastic) ![Language shield](https://img.shields.io/github/languages/top/${response.github_user}/${response.github_repo}?style=plastic)

# Title
${response.title}

## Table of Contents
*   Description
*   Version
*   Usage
*   License
*   Author
*   Contributors
*   Run test
*   Feedback

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
![Github avatar](https://github.com/${response.github_user}.png?size=40) github.com/${response.github_user}

## Contributors
${response.contributors}

## Run Test
${response.test}

## Feedback
<${response.questions}>
`;
}

module.exports = generateMarkdown;

