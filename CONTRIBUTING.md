# Contributing Guide

Thank you for considering contributing to Botlet.IO! We appreciate your time and effort. This document provides guidelines to contribute to the project.

## Table of Contents

- [Contributing Guide](#contributing-guide)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [How to Contribute](#how-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Pull Requests](#pull-requests)
  - [Commit Message Convention](#commit-message-convention)
  - [Developer Certificate of Origin (DCO)](#developer-certificate-of-origin-dco)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

To get started with contributing to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make changes and commit them: `git commit -s -m 'Add my feature'`.
4. Push to the branch: `git push origin my-feature-branch`.

## How to Contribute

There are several ways you can contribute to the project:

### Reporting Bugs

If you encounter any issues, please [open an issue](https://github.com/botlet-io/botlet-api/issues) on the GitHub repository. Provide as much detail as possible, including steps to reproduce the issue if applicable.

### Suggesting Enhancements

If you have an idea for a new feature or enhancement, please open an issue to discuss it first.

### Pull Requests

Before submitting a pull request, ensure that:

- Your code follows the project's coding conventions and style guide.
- Write clear and concise commit messages following the `Angular Commit Message Convention`.
- Include tests for your changes, if applicable.
- Document any new features or changes in the project's documentation.
- Be responsive to feedback and be willing to make changes to your pull request if requested.

## Commit Message Convention

We follow the [Angular Commit Message Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) for writing commit messages. This convention helps maintain a consistent and informative commit history.
The commit message should be structured as follows:

```html
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `<type>` must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit
The `<scope>` is optional and can be anything specifying the place of the commit change.
The `<subject>` contains a succinct description of the change.
The `<body>` can include a more detailed description of the change.
The `<footer>` can contain information about breaking changes and is also the place to reference GitHub issues that this commit closes.

Example:

```text
feat(data): add user data API

Add user data API to data layer

Close #123
```

## Developer Certificate of Origin (DCO)

We require all contributors to sign the Developer Certificate of Origin (DCO) for their contributions. By signing the DCO, you certify that:

- The contribution is your original work or you have the right to submit it.
- The contribution does not infringe on any third-party's rights.
- You have the necessary permissions to grant the rights required by the DCO.

To sign off your contribution, add the following line at the end of **each** git commit message:

```text
Signed-off-by: Your Name <your.email@example.com>
```

You can automate this process by using the `-s` or `--signoff` flag when committing:

```bash
git commit -s -m "Commit message"
```

For more information about the DCO, visit <https://developercertificate.org/>.
