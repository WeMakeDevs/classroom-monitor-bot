<p align="center">
<img src="https://i.imgur.com/BVEDXg8.jpg" width=200px height=200px>
<h1 align="center"> Classroom Monitor Bot </h1>
<p>
<p align="center">
  <b>This bot provides functionalities for the Community Classroom Discord server.</b> <br><br>
  <b>Community Classroom is an initiative 'for the students, by the students'. The initiative aims to provide 'quality education which is free for all'.</b> <br><br>
  <b>Follow us and be a part of this amazing community.</b> <br><br>
  <a href="https://www.youtube.com/c/KunalKushwaha">
    <img width="30px" src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" />
  </a>&ensp;
  <a href="https://twitter.com/commclassroom/">
    <img width="30px" src="https://www.vectorlogo.zone/logos/twitter/twitter-official.svg" />
  </a>&ensp;
  <a href="https://www.linkedin.com/company/commclassroom/">
    <img width="30px" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" />
  </a>&ensp;
  <a href="https://www.instagram.com/commclassroom/">
    <img width="30px" src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" />
  </a>&ensp;
  <a href="https://discord.io/commclassroom">
    <img width="30px" src="https://www.vectorlogo.zone/logos/discordapp/discordapp-tile.svg" />
  </a>&ensp;
  <a href="https://t.me/commclassroom">
    <img width="30px" src="https://www.vectorlogo.zone/logos/telegram/telegram-icon.svg" />
  </a><br>
</p>  

## About

We believe that every student, irrespective of their college or branch, can make it big. Community Classroom is an initiative built on this thought. We provide hands-on training, mentorship and have an inclusive community. All of our courses are FREE and better than most paid courses. We cover every topic in detail and mentor you to stand out and get opportunities by breaking all the barriers. Get expert guidance with career, Open Source, and internships, jobs around the world.

## Note to all contributors

Thank you for putting your time to contribute and helping others out!\
Before contributing do kindly read and follow [Code of Conduct](./CODE_OF_CONDUCT.md).

To get started with contributing, go through the following steps.

## Prerequisites

### System requirements

1. Any system with basic configuration.
2. Operating System: Windows / Linux / Mac

### Software requirements

1. Node.js installed (If not download it [here](https://nodejs.org/en/download/)).
2. Any text editor of your choice (VSCode recommended).
3. Discord account and a Discord server where you have administrator access.

### Skill requirement

1. Basic Knowledge of Git & GitHub.
2. JavaScript
3. [NodeJS](https://nodejs.org/en/)
4. [expressJS](https://expressjs.com/)

## Setting up a local environment

### Forking repository

1. Firstly to make your own copy of the project you have to fork the repository. To fork the repository, press the fork button. In case of any difficulties, refer to the image below
    ![fork](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/Fork.jpg)

### Clone repository

1. Now after you have forked the project, it's time to clone it into your local device so that you can work properly.
2. In your forked repository click on the green code button and copy the provided link. In case of any difficulties, refer to the image below
    ![clone](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/Clone.jpg)

3. Now in your desktop open Git Bash and type `git clone <your-clone-url>.git`, and press enter
4. Now, your forked repository has been cloned in your device! 🎉

## Contributing

Before getting started, make sure you have Developer Mode enabled in your Discord.
If you're not sure how to enable it, go to `Settings > Advanced > Developer Mode: ON`

### Creating a branch

Whenever you want to contribute to any project, it is a good practice to make a separate branch and push it as a PR, rather than making changes to the main/master branch.

1. `git checkout -b <your-branch-name>` will make a separate branch and will change to that branch
2. Now you are ready to make your changes.

### Setting up application and creating bot

1. Go to the [Discord Developers Portal](https://discord.com/developers/applications/) page
2. Login with your Discord credentials. You will see the following screen (image below and for you it will probably be a blank one)
    ![homepage](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/HomePage.jpg)
3. Now click the `New Application` button (refer to the image above)
4. Name your bot (it can be `Community Classroom bot` or anything else) and press `create`
5. You will be at the Developers Portal where you can customize your bot (refer to the image below)
    ![dashboard](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/Dashboard.jpg)
6. Now to create your bot instance go to `Bot` tab, and press `Add Bot` followed by `Yes, do it` in the following popup (refer to the image below)
    ![bot instance](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/BotInstance.jpg)
7. You will be redirected to something similar to this screen
    ![after adding bot](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/After_adding_bot.jpg)
8. Go to `OAuth2` and copy the Client ID (refer to the image below)
    ![App ID](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/app_id.jpg)
9. Now to invite the bot to your server, paste this link in your browser `https://discord.com/api/oauth2/authorize?client_id=<app-id>&permissions=8&scope=bot` and just replace `<app-id>` with your copied client ID
10. You will be redirected to this screen (image below) where you have to select a server and click on `continue` and `authorize` after that
    ![Add server](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/add_server.jpg)

##### Amazing! You have added the bot to your server; although you might see it's offline. Let's make it go online!

### Coding our Bot

1. Open the folder of your cloned repository with any text editor of your choice (VSCode recommended)
2. Now go to the [Discord Developers Portal](https://discord.com/developers/) page where you created the bot and copy the bot token from `Bot` tab(refer to image below)
    ![Bot Token](https://raw.githubusercontent.com/kaiwalyakoparkar/classroom-monitor-bot/main/doc/images/BotToken.jpg)
3. Now create file named`.env` in your root folder. Copy everything from the `.env-sample` file and replace the `BOT-TOKEN` value with the copied token. Note that the `.env` file should be nameless. Create a nameless file, with the extension `.env`. If you add a name to the file, NPM won't be able to access the token.
4. In the terminal run, `npm install`, this will install all the necessary packages
5. Start our server by running `npm start`.
6. All done! The bot is now online!

## Supported commands

| Commands                                                        | Functionality                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cm!help` | Shows help with the commands, features, and what the bot offers |
| `cm!hey` | Says `Hey` to the user |
| `cm!version` | Dislays the current running version of the bot                  |
| `cm!links` | Displays all the social accounts of the community |
| `cm!translate <text>` | Translate the given text to English                            |
| `cm!meme`                  | Send a meme from the [r/programmerhumor](https://www.reddit.com/r/ProgrammerHumor/) Reddit

**This bot is reserved for functionalities offered for the Community Classroom community.**

=======

## Commit Message

After making the desired changes and testing, run the `git add .` command to add the files to the Git staging area. This area contains a list of all the files you have recently changed.

`git commit -m <Type in the commit message>` to commit your changes and save them to the local repository.

##### We follow conventional commits specifications for our commit messages

### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**.

```markdown
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer than 100 characters.

#### Commit Message Header

```markdown
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory. The `(<scope>)` field is optional.

##### Type

Must be one of the following:

* `feat`     Commits that adds a new feature
* `fix`      Commits that fixes a bug
* `refactor` Commits that rewrite/restructure your code, however does not change any behaviour
* `perf`     Commits that are special `refactor` commits that improve performance
* `style`    Commits that do not affect the meaning (white-space, formatting, missing semi-colons, etc.)
* `test`     Commits that add missing tests or correct existing tests
* `docs`     Commits that affect documentation only
* `build`    Commits that affect build components like build tool, ci pipeline, dependencies, project version, etc.
* `ops`   Commits that affect operational components like infrastructure, deployment, backup, recovery, etc.
* `chore`    Miscellaneous commits. E.g.: modifying `.gitignore`

##### Scope

The `scope` provides additional contextual information.

- Is an **optional** part of the format
- Allowed Scopes depend on the specific project
- Don't use issue identifiers as scopes

##### Summary

Use the summary field to provide a succinct description of the change:

- Use the imperative, present tense: "fix", not "fixed" nor "fixes"
- Don't capitalize the first letter
- No dot (`.`) at the end
- Your commit message should not contain any whitespace errors
- Remove unnecessary punctuation marks

#### Commit Message Body

- The `body` should include the motivation for the change and contrast this with previous behavior. This commit message should explain _why_ you are making the change.

- Is an **optional** part of the format
- Use the imperative, present tense: "fix" not "fixed" nor "fixes"
- This is the place to mention issue identifiers and their relations

#### Commit Message Footer

The `footer` can contain information about breaking changes and is also the place to reference GitHub issues, and other PRs that this commit closes or is related to.

```markdown
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

The "Breaking Change" section should start with the phrase `BREAKING CHANGE:` followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

It's an **optional** part of the format.

### Creating commits

```bash
type: :emoji: summary (changes made)
```

To know which `type` to use, refer to [this](#type)

To find suitable/appropriate emojis for the changes, refer to [this](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

Not sure what to type in the summary? Refer to [this](#summary)

#### Some of the tips to write good commit message

- Separate the subject from the body with a blank line
- Your commit message should not contain any whitespace errors
- Remove unnecessary punctuation marks
- Do not end the subject line with a period
- Capitalize the subject line and each paragraph
- Use the imperative mood in the subject line
- Use the body to explain what changes you have made and why you made them.
- Do not assume the reviewer understands what the original problem was, ensure you add it.
- Do not think your code is self-explanatory
- Follow the commit convention defined by your team

#### Example

```bash
feat: :sparkles: add the amazing button
```

## Contributors

Every contributor's efforts and time are deeply appreciated! Thank you. :smile:

[![Contributors](https://contrib.rocks/image?repo=kaiwalyakoparkar/classroom-monitor-bot)](https://github.com/kaiwalyakoparkar/classroom-monitor-bot/graphs/contributors)
