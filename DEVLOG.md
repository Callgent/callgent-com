# Development Guide

## Development Setup

## Development Log

### Auto check `Angular Commit Message Convention`, DCO signing and generated CHANGELOG

based on `Husky`

1. install

    ```bash
    pnpm install --save-dev husky @commitlint/cli @commitlint/config-angular commitizen standard-version cz-conventional-changelog
    ```

2. init Husky

    ```bash
    npx husky init
    ```

3. add configs:

    - /package.json

        ```json title=/package.json
        {
            "scripts": {
                "release": "standard-version"
            }
            "config": {
                "commitizen": {
                "path": "cz-conventional-changelog"
                }
            }
        }
        ```

    - .gitignore

        ```.gitignore title=.gitignore
        # husky
        .husky/_
        .dcosign
        ```

4. create files:

    - /commitlint.config.js

        ```js title=/commitlint.config.js
        module.exports = { extends: ['@commitlint/config-angular'] };
        ```

    - /.husky/prepare-commit-msg

        ```bash title=/.husky/prepare-commit-msg
        node .husky/scripts/dco-sign.js "$1"
        ```

    - /.husky/commit-msg

        ```bash title=/.husky/commit-msg
        npx --no-install commitlint --edit "$1"
        ```

    - /.husky/scripts/dco-sign.js

        ```js title=/.husky/scripts/dco-sign.js
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
        ```

    - /.dcosign

        ```properties title=/.dcosign
        # By creating this `/.dcosign` file, you confirm to agree to the project DCO policy, read CONTRIBUTING.md for more info.
        # Please keep name and email `same` as your git account.

        NAME=Your Name
        EMAIL=your.email@example.com
        ```

5. Now:
   - the commit message is forced to the `Angular convention`
   - commit message is automatically signed-off based on the `/.dcosign` file
   - you may also do interactive commit by `pnpm run commit`
   - you may generate a changelog with `pnpm run release`
