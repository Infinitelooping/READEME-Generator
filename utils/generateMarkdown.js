// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  }
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

  ## Table of Contents (Optional)

  ${data.tableOfContents}

  ## Installation

  ${data.installInstruct}

  ## Usage

  ${data.usage}

  ## License
  
  ${data.license}

  ## Contributing

  Made with the love of: ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions you can view my github below, and email me directly:

  My github: https://github.com/${data.github}

  Email me at: [${data.email}](mailto:${data.email}?subject=READEME.md Generator)
`;
}

module.exports = generateMarkdown;
