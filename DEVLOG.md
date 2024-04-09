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
                "commit": "git-cz",
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
        ```

4. remove `.husky/pre-commit`, and create files:

    - /commitlint.config.js

        ```js title=/commitlint.config.js
        module.exports = { extends: ['@commitlint/config-angular'] };
        ```

    - /.husky/prepare-commit-msg

        ```bash title=/.husky/prepare-commit-msg
        # check 'Signed-off-by' in commit message
        git_commit_message=$(cat $1)
        if [[ "$git_commit_message" != *"Signed-off-by: "* ]]; then
            echo
            echo "\033[31mError\033[0m: Commit message is missing the Signed-off-by line."
            echo "Please use 'git commit -s' to commit your changes."
            echo "You can add it manually with 'git commit --amend -s'."
            echo "Aborting commit."
            echo
            exit 1
        fi

        exit 0
        ```

    - /.husky/commit-msg

        ```bash title=/.husky/commit-msg
        npx --no-install commitlint --edit "$1"
        ```

5. Now, commit with `-s`,

    ```bash
    git commit -s -m "Angular convention message"
    ```

   - the commit message is forced to the `Angular convention`
   - commit message is automatically DCO signed-off
   - you may also do interactive commit by `pnpm run commit`
   - you may generate a changelog with `pnpm run release`

### Configure your billing, we integrate stripe

1. Create your product

   ```
   https://dashboard.stripe.com/products?active=true
   ```

2. Enter the newly created product and create a payment link

   ```
   https://buy.stripe.com/28o2azfLK4O53HqfZ4
   ```

3. Set up your subscription details

   ```
   https://dashboard.stripe.com/settings/billing/portal
   ```

4. Configure billing callback events

   ```
   https://dashboard.stripe.com/webhooks
   ```

   