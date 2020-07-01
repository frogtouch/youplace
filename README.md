<h1 align="center">
  <img alt="Layout" src="./github/main-image/youplace-advertising.png">
</h1>

<h1 align="center">Repository with Frontend, Backend and Mobile of the YouPlace project.</h1>
<h3>See below, within access to each module of the project within its respective session, being Frontend, Backend and Mobile.</h3>

## **Clone the FullStack version project and access the folder**

<h1>Backend</h1>
<h3 align="center">
  Express Application for IPlace project
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/badge/typescript-99.2-informational?color=%237D40E7">

  <a href="https://www.linkedin.com/in/vinicius-prudencio-64bb99128/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-vini%20prudencio-%237D40E7">
  </a>

  <img alt="Repository size" src="https://img.shields.io/badge/repo%20size-920kb-orange?color=%237D40E7">

  <a href="https://github.com/Vynny21/fastfeet-frontend/commits/dev">
    <img alt="GitHub last commit" src="https://img.shields.io/badge/last%20commit-june-orange?color=%237D40E7">
  </a>

  <a href="https://img.shields.io/github/issues/Vynny21/fastfeet-frontend?color=yellow">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Vynny21/fastfeet-frontend?color=%237D40E7">
  </a>

  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-orange?color=%237D40E7">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>


## 💇🏻‍♂️ About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Vynny/youplace-app.git && cd youplace-app
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/gobarber-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h1>Frontend</h1>
<h3 align="center">
  ReactJS Application for YouPlace project
</h3>

<p align="center">The best way to schedule your service!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/badge/typescript-99.2-informational?color=%237D40E7">

  <a href="https://www.linkedin.com/in/vinicius-prudencio-64bb99128/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-vini%20prudencio-%237D40E7">
  </a>

  <img alt="Repository size" src="https://img.shields.io/badge/repo%20size-920kb-orange?color=%237D40E7">

  <a href="https://github.com/Vynny21/fastfeet-frontend/commits/dev">
    <img alt="GitHub last commit" src="https://img.shields.io/badge/last%20commit-june-orange?color=%237D40E7">
  </a>

  <a href="https://img.shields.io/github/issues/Vynny21/fastfeet-frontend?color=yellow">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Vynny21/fastfeet-frontend?color=%237D40E7">
  </a>

  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-orange?color=%237D40E7">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

</br>

<p align="center">
  <img alt="Layout" src="./github/main-image/youplace-advertising.png">
</p>

## 💇🏻‍♂️ About the project

## 🚀 Technologies

Technologies that I used to develop this web client

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Icons](https://react-icons.netlify.com/#/)
- [UnForm](https://unform.dev/) [💜](https://rocketseat.com.br/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Polished](https://github.com/styled-components/polished)
- [Axios](https://github.com/axios/axios)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Vynny21/youplace-app.git && cd youplace-app
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/gobarber-web
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-web

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h1>Mobile</h1>

<h3 align="center">
  React Native Application for GoBarber project
</h3>

<p align="center">
  <img alt="Layout" src="./github/main-image/iplace.png">
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/badge/typescript-99.2-informational?color=%237D40E7">

  <a href="https://www.linkedin.com/in/vinicius-prudencio-64bb99128/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-vini%20prudencio-%237D40E7">
  </a>

  <img alt="Repository size" src="https://img.shields.io/badge/repo%20size-920kb-orange?color=%237D40E7">

  <a href="https://github.com/Vynny21/fastfeet-frontend/commits/dev">
    <img alt="GitHub last commit" src="https://img.shields.io/badge/last%20commit-june-orange?color=%237D40E7">
  </a>

  <a href="https://img.shields.io/github/issues/Vynny21/fastfeet-frontend?color=yellow">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Vynny21/fastfeet-frontend?color=%237D40E7">
  </a>

  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-orange?color=%237D40E7">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💇🏻‍♂️ About the project

## 🚀 Technologies

Technologies that I used to develop this mobile client

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [UnForm](https://unform.dev/) [💜](https://rocketseat.com.br/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- Have this application's [API](https://github.com/EliasGcf/gobarber-api) running

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Vynny21/youplace-app.git && cd youplace-app
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# If you are going to emulate with android, run this command
# Be sure to have the emulator open
$ yarn android

# If you are going to emulate with ios, run this command
$ yarn ios
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/gobarber-mobile
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-mobile

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Vinicius Prudencio 👋 [See my linkedin](https://www.linkedin.com/in/vinicius-prudencio-64bb99128/)
