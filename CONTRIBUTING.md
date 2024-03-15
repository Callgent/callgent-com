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

You may try interactive commit to learn more:

```bash
pnpm run commit
```

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

The first time you commit your contribution, just create `/.dcosign` file to fill in your formal name and email address. Then each commit message will be automatically appended with:

```text
Signed-off-by: Your Name <your.email@example.com>
```

For more information about the DCO, visit <https://developercertificate.org/>.
