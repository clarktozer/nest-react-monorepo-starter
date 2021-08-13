<div align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
    <a href="https://reactjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" width="150" alt="React Logo" /></a>
</div>

# nest-react-monorepo-starter

A monorepo starter with NestJS and React with yarn workspaces

## Apps

-   client
    -   React
    -   Redux
    -   React Router
    -   CASL
    -   Yup
    -   Formik
    -   Material UI
-   server
    -   NestJS
    -   Local Auth
    -   Google Auth
    -   Facebook Auth
    -   LinkedIn Auth
    -   Redis for sessions
    -   CSRF session tokens
    -   CASL for authorization
    -   Yup schema validation of requests
    -   TypeORM (PostgreSQL)
    -   Swagger docs

## Shared Libs

-   casl
    -   Shared authorization code for defining rules based on a user role
-   casl-react
    -   Authorization react components for use in the client application
-   validation
    -   Shared yup schemas for form and request body validation

## Installation

```bash
$ yarn
```

Then add your config to the servers environment variables by creating a .env file at the server app level (see readme in the server app).

## Build Libs

```bash
$ yarn build:libs
```

## Serve Apps

```bash
$ cd apps
$ cd server
$ yarn start:dev
```

```bash
$ cd apps
$ cd client
$ yarn start:dev
```
