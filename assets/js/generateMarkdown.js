// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === `${data.license}`) {
        return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
    } else {
        console.log('No license was provided');
        return('');
    }
};

renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === `${data.license}`) {
        return `https://img.shields.io/badge/License-${data.license}-blue.svg`;
    } else {
        return ('');
    }
};

renderLicenseLink();
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === `${data.license}`) {
        return `${document.license}`;
    } else {
        return ('');
    }
};
renderLicenseSection();
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:

  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Table of Contents

  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contribution](#contribution)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Description

  ${data.description}
   
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License 

  ${data.license}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.tets}

  ## Contact Information
  
  - My GitHub Link: [${data.github}](https://www.github.com/${data.github})

  - My E-mail Address: [${data.email}]`;
};

module.exports = generateMarkdown;