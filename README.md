<p align="center">
<img src="https://i.imgur.com/BVEDXg8.jpg" width=200px height=200px>
<h1 align="center"> Classroom Monitor Bot </h1>
<p>
<p align="center">
  <b>This bot provides functionalities for 'Community Classroom' discord server.</b> <br><br>
  <b>Community Classroom is an initiative 'for the students, by a student'. The initiative aims to provide 'quality education which is free for all'.</b> <br><br>
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
  <a href="https://discord.gg/K9kxUXvfND">
    <img width="30px" src="https://www.vectorlogo.zone/logos/discordapp/discordapp-tile.svg" />
  </a>&ensp;
  <a href="https://t.me/commclassroom">
    <img width="30px" src="https://www.vectorlogo.zone/logos/telegram/telegram-icon.svg" />
  </a><br>
</p>  

## About :

We believe that every student, irrespective of their college or branch, can make it big. Community Classroom is an initiative built on this thought. We provide hands-on training, mentorship and have an inclusive community. All of our courses are FREE and better than most paid courses. We cover every topic in detail and mentor you to stand out and get opportunities by breaking all the barriers. Get expert guidance with career, Open Source, and internships, jobs around the world.

## Note to all contributors
Thank you for putting your time to contribute and helping others out.
Before contributing do kindly read and follow [Code of conduct](./CODE_OF_CONDUCT.md)
To get started with contributing go through the following steps

## Prerequisites

### System requirement

1. Any system with basic configuration.
2. Operating System : Windows / Linux / Mac

### Software requirement

1. Node.js installed (If not download it [here](https://nodejs.org/en/download/)).
2. Any text editor of your choice.
3. Discord account and a discord server where you have admin access

### Skill requirement

1. Knowledge of git & github.
2. JavaScript
3. [NodeJS](https://nodejs.org/en/)
4. [expressJS](https://expressjs.com/)

## Setting up Locale Environment

### Forking repository

1. Firstly to make your own copy of the project you have to fork the repository. To fork the repository press the fork button. In case of any difficulty refer to the image below
    <img src="./doc/images/Fork.jpg" alt="Demo fork image"/>

### Clone repository

1. Now after you have forked your project its time to clone it into your local device so that you can work on it
2. In your forked repository click on the green code button and copy the provided link. In case of any difficulty refer to the image below
    <img src="./doc/images/Clone.jpg" alt="Demo copy image"/>
3. Now in your desktop open `git bash` and type `git clone <your-clone-url>.git` and press enter
4. Now, your forked repo has been cloned in your device 

## Contributing

Before starting make sure you have developer mode enabled in your discord
If not then got to `Settings > Advanced > Developer Mode: ON`

### Creating a branch

Whenever you want to contribute to any project it is a good practice to make a separate branch and push it as PR rather than making changes to the main/master branch

1. `git checkout -b <your-branch-name>` will make a separate branch and will take you to it
2. Now you are ready to make your desired changes

### Setting up application and creating bot

1. First visit [here](https://discord.com/developers/applications/)
2. Login with your discord credentials and will see the screen(image below and for you it will probably be a blank one)
    <img src="./doc/images/HomePage.jpg" alt="home page">
3. Now click the `New Application` button(refer to image above)
4. Name your bot and press `create` 
5. Now you will appear at the application dashboard where you can customize your bot(refer to image below)
    <img src="./doc/images/Dashboard.jpg" alt="dashboard">
6. Now to create your bot instance go to `Bot` tab and press`Add Bot` followed by `Yes,do it` in the following popup(refer to image below)
    <img src="./doc/images/BotInstance.jpg" alt="bot instance">
7. Now you will appear to this screen(image below)
    <img src="./doc/images/After_adding_bot.jpg" alt="bot dashboard">
8. Go to `OAuth2` and copy the client id(refer to image below)
    <img src="./doc/images/app_id.jpg" alt="bot dashboard">
9. Now to invite the bot to your server, paste this link in your browser `https://discord.com/api/oauth2/authorize?client_id=<app-id>&permissions=8&scope=bot` and just replace `<app-id>` with your copied client id
10. Now you will be redirected to this screen(image below) where you have to select a server and click on `continue` and `authorize` after that
    <img src="./doc/images/add_server.jpg" alt="server page">

##### Now your bot will be added to your server but it is still offline. So let's start...

### Coding our Bot

1. Open the folder of your cloned repository with any text editor of your choice
2. Now go to developers portal where you created the bot and copy the bot token from `Bot` tab(refer to image below)
    <img src="./doc/images/BotToken.jpg" alt="bot token">
3. Now create a `.env` file in your root folder and copy everything from `.env-sample` file and replace the `BOT-TOKEN` value with the copied token
4. In the terminal run `npm install`, this will install all the packages
5. Then to start our server run `npm start`, this will start our server and the bot will be online


## Commands Supported : 

#### `cm!help` - Helps with the commands and features what the bot offers.
#### `cm!hey` - Says 'Hey' to the user.
#### `cm!version` - Displays the current running version of the bot.
#### `cm!links` - Displays all the social accounts of the community.
#### `cm!translate <text>` - Translate given text to English.

This bot is reserved for functionalities offered for community classroom community.

=======

## Commit Message

After making the desired changes and testing use `git add .` command to add the files to the Git staging area. This area contains a list of all the files you have recently changed. 

`git commit -m <Type in the commit message>` to commit your changes to save your changes to the local repository.

##### We follow conventional commits specifications for our commit messages


### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer than 100 characters.

#### Commit Message Header

```
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

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:
* `feat`     Commits, that adds a new feature
* `fix`      Commits, that fixes a bug
* `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
* `perf`     Commits are special `refactor` commits, that improves performance
* `style`    Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
* `test`     Commits, that add missing tests or correcting existing tests
* `docs`     Commits, that affect documentation only
* `build`    Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
* `ops`   Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
* `chore`    Miscellaneous commits e.g. modifying `.gitignore`


##### Scope

The `scope` provides additional contextual information.
* Is an **optional** part of the format
* Allowed Scopes depends on the specific project
* Don't use issue identifiers as scopes


##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "fix" not "fixed" nor "fixes"
* don't capitalize the first letter
* No dot (.) at the end
* Your commit message should not contain any whitespace errors
* Remove unnecessary punctuation marks


#### Commit Message Body

* The `body` should include the motivation for the change and contrast this with previous behavior. This commit message should explain _why_ you are making the change.
* Is an **optional** part of the format
* Use the imperative, present tense: "fix" not "fixed" nor "fixes"
* This is the place to mention issue identifiers and their relations


#### Commit Message Footer

The `footer` can contain information about breaking changes and is also the place to reference GitHub issues, and other PRs that this commit closes or is related to.

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

It's an **optional** part of the format.


### Creating commits

* ```
  type: :emoji: summary (changes made)
  ```

To know which `type` to use refer [this](#type)

To find suitable emoji for the changes refer [this](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

For summary refer [this](#summary)


#### Some of the tips to write good commit message

* Separate the subject from the body with a blank line
* Your commit message should not contain any whitespace errors
* Remove unnecessary punctuation marks
* Do not end the subject line with a period
* Capitalize the subject line and each paragraph
* Use the imperative mood in the subject line
* Use the body to explain what changes you have made and why you made them.
* Do not assume the reviewer understands what the original problem was, ensure you add it.
* Do not think your code is self-explanatory
* Follow the commit convention defined by your team


#### Example
```
feat: :sparkles: add the amazing button
```

## Contributors :

Every contributor's efforts and time are deeply appreciated :smile:

<a href = "https://github.com/kaiwalyakoparkar/classroom-monitor-bot/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=kaiwalyakoparkar/classroom-monitor-bot"/>
</a>
