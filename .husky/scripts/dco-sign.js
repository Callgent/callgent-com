const fs = require("fs");
const path = require("path");

const dcoFilePath = path.join(__dirname, "../..", ".dcosign");

if (!fs.existsSync(dcoFilePath)) {
  console.error(
    "ERROR: .dcosign file is missing in the project root directory.",
  );
  console.error(
    "Please create a .dcosign file with your NAME and EMAIL like this:",
  );
  console.error("NAME=Your Name");
  console.error("EMAIL=your.email@example.com");
  process.exit(1);
}

const dcoContent = fs.readFileSync(dcoFilePath, "utf8");
const lines = dcoContent.split(/\r?\n|\r/g);

const regexName = /^NAME *= *.+/;
const regexMail = /^EMAIL *= *[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const lineName = lines.find((line) => line.match(regexName));
const lineMail = lines.find((line) => line.match(regexMail));
const name = lineName ? lineName.split("=")[1].trim() : "";
const email = lineMail ? lineMail.split("=")[1].trim() : "";

if (!name || !email) {
  console.error(
    `ERROR: ${name ? "EMAIL" : "NAME"} is not properly defined in .dcosign.`,
  );
  process.exit(1);
}

const msgFile = process.argv.length > 1 && process.argv[2];
if (msgFile) {
  fs.readFile(msgFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error: failed to sign commit message.", err);
      return;
    }

    if (!data || !data.includes("Signed-off-by"))
      fs.appendFileSync(msgFile, `\nSigned-off-by: ${name} <${email}>\n`);
  });
} else console.log(`DCO sign-off will use: ${name} <${email}>`);
