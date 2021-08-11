# nest-react-monorepo-starter

A monorepo starter with NestJS and React with yarn workspaces

## Apps

-   client
    -   A React application
-   server
    -   A NestJS api

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

Then add your config to the servers environment variables by creating a .env file at the serve app level (see readme in the server app).

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
