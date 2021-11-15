// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#Usage)
  [License](#License)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [Quesetions](#Questions)

  ## Installation

  ${data.installInstruct}

  ## Usage

  ${data.usage}

  ## License
  
  This project is under the following licensing: ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions you can view my github below, and email me directly:

  My github: https://github.com/${data.github}

  Email me at: [${data.email}](mailto: ${data.email})

  I will respond with 24 hours, please provide as the subject the project 
  and issue you have questions about. Thanks.
`;
}

module.exports = {
  renderLicenseLink:  renderLicenseLink,
  renderLicenseSection: renderLicenseSection,
  renderLicenseBadge: renderLicenseBadge,
  generateMarkdown: generateMarkdown
}
