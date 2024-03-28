# [Botlet.IO](https://botlet.io) Portal Site

<p align="center">
    <a href="https://botlet.io" target="_blank">
        <img alt="Static Badge" src="https://img.shields.io/badge/IO-IO?logo=IO&logoColor=%20%23f5f5f5&label=Botlet&labelColor=%20%23155EEF&color=%23EAECF0"></a>
    <a href="https://discord.gg/V9HKBukSRp" target="_blank">
        <img src="https://img.shields.io/discord/1215998670265127102?logo=discord"
            alt="chat on Discord"></a>
    <a href="https://twitter.com/intent/follow?screen_name=BotletIO" target="_blank">
        <img src="https://img.shields.io/twitter/follow/BotletIO?style=social&logo=X"
            alt="follow on Twitter"></a>
<a href="https://app.snyk.io/test/github/Botlet-IO/botlet-io" alt="FOSSA Status"><img src="https://snyk.io/test/github/Botlet-IO/botlet-io/badge.svg"/></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FBotlet-IO%2Fbotlet-io?ref=badge_shield&issueType=license" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FBotlet-IO%2Fbotlet-io.svg?type=shield&issueType=license"/></a>
<a href="https://github.com/Botlet-IO/botlet-io/issues">
<img src="https://img.shields.io/github/issues/Botlet-IO/botlet-io.svg" alt="GitHub issues" /></a>
<a href="https://github.com/Botlet-IO/botlet-io/pulls">
<img src="https://img.shields.io/github/issues-pr/Botlet-IO/botlet-io.svg" alt="GitHub pull requests" /></a>
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" height="20px">
</p>

This is the portal website of [Botlet.IO](https://botlet.io), gratefully forked from [NextJSTemplates](https://github.com/NextJSTemplates/startup-nextjs).

## Development

1. "node": ">=18.17.0"
2. checkout the repository:

    ```bash
    git clone https://github.com/Botlet-IO/botlet-io.git
    cd botlet-io
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
