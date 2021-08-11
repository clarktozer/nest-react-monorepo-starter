<div align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</div>

<h3 align="center">API</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

## Features

- Local Auth
- Google Auth
- Facebook Auth
- LinkedIn Auth
- Redis for sessions
- CSRF session tokens
- CASL for authorization
- TypeORM (PostgreSQL)
- Swagger docs

## Installation

You will need to create your database, then add the name of the database to your .env

## Environment Variables

The values included are defaults if the variable is not specified.

```bash
APP_HOST=localhost
APP_PORT=4000
API_PREFIX=api

CLIENT_APP_URL=http://localhost:3000

DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=5432

SESSION_COOKIE_KEY=sid
SESSION_SECRET=secret

CSRF_COOKIE_KEY=csrf
CSRF_SESSION_KEY=csrfSecret

REDIS_HOST=localhost
REDIS_PORT=6379

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=

FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
FACEBOOK_CALLBACK_URL=

LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_CALLBACK_URL=
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
