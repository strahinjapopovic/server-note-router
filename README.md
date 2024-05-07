
# server-note-router

## Express.js (v4.19.2) - Server Note Routes 
![express version](https://img.shields.io/npm/v/express?style=flat&logo=express&label=express.js&color=red) ![node version](https://img.shields.io/npm/v/node?style=flat&logo=nodedotjs&label=node&labelColor=white&color=red) ![npm version](https://img.shields.io/badge/version-v10.5.1-npm.svg?style=flat&logo=npm&label=npm&labelColor=yellow&color=red) ![nvm version](https://img.shields.io/badge/version-v0.39.7-nvm.svg?style=flat&logo=npm&label=nvm&labelColor=orange&color=red)

[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) 

<p align="left">
    <img src="https://img.shields.io/github/languages/top/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/repo-size/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/issues/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/last-commit/strahinjapopovic/node-gen-readme?style=flat&color=blue" >
    
<p align="left">
    <a href="https://gist.github.com/Julien-Marcou/156b19aea4704e1d2f48adafc6e2acbf"><img src="https://img.shields.io/badge/es2023-javascript-blue?logo=javascript" /></a>
    <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/v22-node-blue?logo=nodedotjs" /></a>
    <a href="https://docs.npmjs.com/about-npm#getting-started"><img src="https://img.shields.io/badge/v10-npm-blue?logo=npm" /></a>
    <a href="https://www.npmjs.com/package/json5"><img src="https://img.shields.io/badge/v2-json5-blue?logo=npm" /></a>
    <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/v4-express.js-blue?logo=npm" /></a>
</p>

<p align="left">
    <a href="https://twitter.com/stanpopovic"><img alt="Twitter: stanpopovic" src="https://img.shields.io/twitter/follow/stanpopovic.svg?style=social" target="_blank" /></a>
    <a href="https://www.youtube.com/@strahinja-popovic-ch"><img alt="Youtube: strahinja-popovic-ch" src="https://img.shields.io/badge/YouTube-red?&logo=youtube&style=social" target="_blank" /></a>
</p>

## Express - Node.js web application framework with `express.js v4.19.2`, `node.js v22.0.0`, `npm-v10.5.1` and `nvm-v0.39.7 (optional)`

<a id="table-of-content"></a>
## Table of Content

- [Table of Content](#table-of-content)
- [Description Info](#description-info)
- [GitHub Repository](#github-repository)
- [Installation Process](#installation-process)
- [Usage Info](#usage-info)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)
- [Questions and Contacts](#questions-and-contacts)

<a id="description-info"></a>
## Description Info

Application `server-note-router` or Express.js (v4.19.2) Server Note Routes application serve as an note recorder app that can store notes in a form of a datafile and perform basic read, insert and delete operations on inputs. It is a basic backend to fronten online web service system for using notes. It is developed by using `node.js v22.0.0` JavaScript runtime environment, `Node Package Manager npm-v10.5.1` public registry and handler packages. Application can be invoked from `~/server-note-router/app>` directory by using bash terminal command `> $ npm start`.

<a id="github-repository"></a>
## GitHub Repository 
[![GitHub](https://img.shields.io/badge/logo-GitHub-white?logo=github&logoColor=black&style=flat&label=server-note-router&labelColor=white&color=red)](https://github.com/strahinjapopovic/server-note-router)

## Git Bash Terminal setting up origin main
[<img src="./images/screenshots/gitbash-cli-remote-origin-main.PNG" width="1200" alt="Git Bash Terminal screenshot." />](./images/screenshots/gitbash-cli-remote-origin-main.PNG)

<a id="installation-process"></a>
## Installation Process
### Node.js®-JavaScript runtime environment `node.js-v22.0.0`, Node Package Manager `npm-v10.5.1` and Express.js `express.js-v4.19.2`.

## Prebuild Installer Node.js® installation
Download Node.js version v20.12.2, v21.7.3 or v22.0.0 from [Node.js®-v22.0.0 ](https://nodejs.org/en) official website and install at your local machine with Prebuilt Installer. It will include npm (v10.5.0) or npm (v10.5.1) depends on node.js version instolled. Then run those commands below. I use Git-Bash terminal and my default approximate `PS1` or `$PS1` (Prompt String 1) variable looks like `[user@host: ~] /c/Users/user/dev/server-note-router/app> (main) $`, so left dollar sign out of any coppied code that has to be runned, if any.

Initializing npm in the repo and installing express.js framework
```bash
npm init -y
npm install -D express # express.js framework packages setting up environment for server-side development
```

Make changes in the `package.json` if you are going to use ECMAScript modules code for packages as `import/export` instead of `module.exports`, do as follows:
```json
{
  "name": "note-router",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "engines": {
    "node": ">=16"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "express": "^4.19.2",
    "uuid": "^9.0.1"
  }
}
```
After installing `express.js` packages and making changes in the `package.json` file run in terminal:
```bash
npm start # starting server application from server.js file
```
<a id="usage-info"></a>
## Usage Info

Application can be used for recording notes to better manage your time during the day and over the week.

<a id="contributing-guidelines"></a>
## Contributing Guidelines

Currentlly, at this stage there is no contributors but for more information any enquiry can be reffered to Question and Contact section.

## License

Copyright © 2024, [codeXdeveloper](https://github.com/strahinjapopovic). Released under the [MIT License](./LICENSE).

<a id="questions-and-contacts"></a>
## Questions and Contacts

Questions about application can be reffered to the author's [GitHub account](https://github.com/strahinjapopovic/server-note-router) or you can [Contact Me](mailto:spope.mails@gmail.com) directly over an email.
