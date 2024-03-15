const fs = require('fs');
const path = require('path');

const dcoFilePath = path.join(__dirname, '../..', '.dcosign');

if (!fs.existsSync(dcoFilePath)) {
  console.error('ERROR: .dcosign file is missing in the project root directory.');
  console.error('Please create a .dcosign file with your NAME and EMAIL like this:');
  console.error('NAME=Your Name');
  console.error('EMAIL=your.email@example.com');
  process.exit(1);
}

const dcoContent = fs.readFileSync(dcoFilePath, 'utf8');
const lines = dcoContent.split('\n');

const name = lines.find(line => line.startsWith('NAME=')).split('=')[1];
const email = lines.find(line => line.startsWith('EMAIL=')).split('=')[1];

if (!name || !email) {
  console.error('ERROR: NAME or EMAIL is not properly defined in .dcosign.');
  process.exit(1);
}

const msgFile = process.argv.length > 1 && process.argv[2];
if (msgFile) {
  fs.readFile(msgFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error: failed to sign commit message.', err);
      return;
    }
  
    if (!data || !data.includes('Signed-off-by'))
      fs.appendFileSync(msgFile, `\nSigned-off-by: ${name} <${email}>\n`);
  });
} else
  console.log(`DCO sign-off will use: ${name} <${email}>`);
