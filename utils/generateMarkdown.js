// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "BSD 3-clause") {
    badge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  } else if (license === "Apache 2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else if (license === "GNU GPL v2") {
    badge = "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if(license === "MIT") {
    link = "(https://opensource.org/licenses/MIT)"
  } else if (license === "BSD 3-clause") {
    link = "(https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === "Apache 2.0") {
    link = "(https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU GPL v2") {
    link = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else {
    link = ""
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `# license` 
  } else {
    return "";
}
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title},

  ${data.license}

  # Description
  ${data.description}

  # Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Credits
  ${data.credits}

  # Tests
  ${data.tests}

  # Questions
  Github: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
