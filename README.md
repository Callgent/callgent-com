# [callgent.com](https://callgent.com) Portal Site

<p align="center">
    <a href="https://callgent.com" target="_blank">
        <img alt="Static Badge" src="https://img.shields.io/badge/IO-IO?logo=IO&logoColor=%20%23f5f5f5&label=Callgent&labelColor=%20%23155EEF&color=%23EAECF0"></a>
    <a href="https://discord.gg/V9HKBukSRp" target="_blank">
        <img src="https://img.shields.io/discord/1215998670265127102?logo=discord"
            alt="chat on Discord"></a>
    <a href="https://twitter.com/intent/follow?screen_name=callgent" target="_blank">
        <img src="https://img.shields.io/twitter/follow/callgent?style=social&logo=X"
            alt="follow on Twitter"></a>
<a href="https://app.snyk.io/test/github/Callgent/callgent-com" alt="FOSSA Status"><img src="https://snyk.io/test/github/Callgent/callgent-com/badge.svg"/></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fcallgent-com%2Fcallgent-com?ref=badge_shield&issueType=license" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcallgent-com%2Fcallgent-com.svg?type=shield&issueType=license"/></a>
<a href="https://github.com/Callgent/callgent-com/issues">
<img src="https://img.shields.io/github/issues/Callgent/callgent-com.svg" alt="GitHub issues" /></a>
<a href="https://github.com/Callgent/callgent-com/pulls">
<img src="https://img.shields.io/github/issues-pr/Callgent/callgent-com.svg" alt="GitHub pull requests" /></a>
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" height="20px">
</p>

This is the portal website of [Callgent](https://callgent.com), gratefully forked from [NextJSTemplates](https://github.com/NextJSTemplates/startup-nextjs).

## Development

1. "node": ">=18.17.0"
2. checkout the repository:

    ```bash
    git clone https://github.com/Callgent/callgent-com.git
    cd callgent-com
    ```

3. rename `.env.example` to `.env`
4. Integrate to [canny.io](https://developers.canny.io/install/widget/sso) SSO
5. Start the Service

    - Development Environment

        ```bash
        npm i -g pnpm
        pnpm install
        pnpm run dev
        ```

    - Production Environment

        ```bash
        pnpm install
        pnpm run build
        pnpm run start
        ```

    - ESLint check & fix

        ```bash
        pnpm run lint
        pnpm run lint-fix
        ```

## Contributing

We welcome contributions from the community! Before submitting a pull request, please review our [Contributor Development Agreement (CDO)](CONTRIBUTING.md).

### DCO Signoff

please commit with `-s`:

```bash
git commit -s -m '...'
```
