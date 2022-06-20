# Content Aggregator

**Version 1.0.0**

Content Aggregator is a rss feed reader web application that displays news by aggregating it from diffrent sources in short and scuccint manner.

## What is the use of this Repo

This Project is a simple web App (ReactJS + NodeJS) which demonstrates the following:
- Creating a basic frontend via React
- Making HTTP calls with axios to the back-end
- Using MUI to improve the front-end
- Create a backend using express with proper MVC folder structure
- Use OAuth via Passport JS to implement Authentication
- Use Cluster/ child process module to improve throughput
- Logging in NodeJS using Winston
- Unit testing in NodeJS using Mocha and Chai

---

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install and Run    create-react-app
Install create-react-app npm package. Use the following command to install 
npx create-react-app <name>

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

- Clone the project into local:

```bash
git clone https://github.com/YashS96/-app.git
```
- Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

- In order to run the application Type the following command on both server and client side terminals

```bash
npm start
```

The Application front-end runs on **localhost:3000**

The Application back-end runs on **localhost:8000**

---

## Application Design
  
 - The application makes Http calls to the back-end server via ***axios*** and in the backend, the content is fetched through rss feeds from different news sources via async calls.
 - The folder structure is a MVC.
 - The database is a No-SQL database(MongoDB Atlas)
 - For scaling the ***cluster*** module is used.
 - For Testing the ***Mocha*** and ***Chai*** are used.
 - For logging ***Winston*** is used.
  
#### Http end points
  
  - http://localhost:8000/ndtvfeed
  - http://localhost:8000/bbcfeed
  - http://localhost:8000/hindufeed

####  Front-end Components
  - Articles:
  - Header:
  - SubHeader:
  - Footer:

####  Back-end Server 
  - Controllers:
  - Content:
  - DB Connection:
  
---
## Resources

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://https://mui.com/ to understand how to use MUI Components

**NodeJS** : Refer to https://nodejs.org/en/ to understand the concepts of NodeJS

**Express** : Refer to https://expressjs.com/ to understand the concepts of Express

**PassportJS** : Refer to https://www.passportjs.org/ to understand the concepts of PassportJS

**Winston** : Refer to https://www.npmjs.com/package/winston to understand the concepts of winston

**Mocha** : Refer to https://mochajs.org/ to understand the concepts of Mocha

**Chai** : Refer to https://www.chaijs.com/ to understand the concepts of Chai
