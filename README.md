# Property Management Application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:5000/graphql?]to view it in the browser - you can see the UI view of the graphQL for querying and development

### `npm start-prod`

Runs the app in the production mode.\
Have configured the environment values - but in real production mode we can add more configurations

### About the HOMES API

This is server-side/backend application - when running in port 5000 , accepts a request from the front end Homes CWA app to get the homes details, create home details, update home details and to delete the homes from the organization.

We need to start the HOMES API and then we need to start the HOMES CWA app - which enables the front end and back end connection. If the HOMES API is not started - we will see Errors/Error Page

This server side application is developed using NodeJS, ExpressJS,express-GraphQL(to create
the GraphQL Queries/Mutations) and JavaScript

As part of the testing and a test-prod strategy - two DB connections are created
and can be used wiht the help of env files and secrets.

## Flow for local working

- After the project is cloned from Git Repo - run "npm install" or you can choose yarn to install the dependencies.
- Once the dependencies are installed - start the application by running "npm start"/"npm start-prod".
- Once the application is started - to get a GraphQL UI interface for running queries - you can try "https://localhost:5000/graphql?". There you test your queries and mutations with schema definitions.
- In case of running the test cases - run "npm test" and if you need a HTML report - run "npm test-report". The coverage folder will be created with the reports of testing.
- Once the application is run successfully - can check the console logs with message - "Connected to DB"
- All the DB secrets and few environment configs are setup in env file.
