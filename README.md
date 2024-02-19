# jadon-koa-api

## Setup

This framework is based on node.js v18.16.0. Please ensure your already installed this node.js version. And then use it.

```
nvm use
```

Install dependencies. I recommend that you use `yarn` to install dependencies.

```
npm install
```

## Running locally

The database is MySQL. Please use docker-compose to build up the database.

```
make docker-compose-run
```

If you run up this project at the first time, you can execute the following command to init your tables.

```
make init-db
```

The above are initialization steps. Once you finished, you could skip them in the future. Now, you can execute this command to start developing!

```
make watch-server
```

For now, you can access `http://localhost:3000/docs` to review the API docs. Or you can start your development works.

## Deployment
