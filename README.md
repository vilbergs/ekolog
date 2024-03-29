# Ekolog

A dead-simple echo server that stores log entries

## Why

I made this so that I could capture console logs and exceptions from browsers on mobile devices, where accessing the devices dev-tools was not an option.

## Features

- Stores logs in a key-value store.
- Echoes/logs out any requests made to the server
- Docker ready

## Setup

### Requirements

- Deno (1.40.x and later) or Docker
- docker-compose (if using with docker)

The server can be run using a local Deno installation or run via Docker Compose

### Configuring Port and Environment Variables

The server uses port `8080` by default, but this can be changed by adding a `.env` file to the project root (see `.env-example`).

### Running

**Using a local Deno installation.**

```shell
deno run --unstable-kv --allow-net --allow-env main.ts
```

**Using docker-compose.**

```shell
docker-compose up
```
