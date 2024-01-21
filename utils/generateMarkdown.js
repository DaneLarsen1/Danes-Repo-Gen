
function renderLicenseBadge(license) {
    if (!license) return '';
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  }
  
  function renderLicenseLink(license) {
    if (!license) return '';
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
  
  function renderLicenseSection(license) {
    if (!license) return '';
    return `## License\nThis project is licensed under the ${license} license. For more information, see [here](${renderLicenseLink(license)}).`;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me at [${data.email}](mailto:${data.email}).
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  `;
  }
  
  module.exports = generateMarkdown;
  