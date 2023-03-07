// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'The MIT License') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  } else if (license === 'The GPL License') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else if (license === 'Apache License') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'GNU License') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else {
    return ''
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'The MIT License') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if (license === 'The GPL License') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'Apache License') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GNU License') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'The MIT License') {
    return 'License: MPL 2.0'
  } else if (license === 'The GPL License') {
    return 'License: GPL v3'
  } else if (license === 'Apache License') {
    return 'License'
  } else if (license === 'GNU License') {
    return 'License: GPL v3'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email-address}. You can find more of my work at www.github.com/${data.github}.`;
}

module.exports = generateMarkdown;
