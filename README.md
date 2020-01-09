## Shiny Memory!

[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](https://oraykt-shiny-memory.herokuapp.com/)
[![Build Status](https://travis-ci.org/oraykt/shiny-memory.svg?branch=master)](https://travis-ci.org/oraykt/shiny-memory)

Develop Restful API with Express and MongoDB <br />

https://oraykt-shiny-memory.herokuapp.com/ <br/ >

Endpoints served on <b>/api/v1/movieservice</b> <br />

# Movies

| Route                   | HTTP Verb | RESPONSE | Description                        |
| ----------------------- | --------- | -------- | ---------------------------------- |
| /movies                 | `GET`     | Array    | List all movies with comments.     |
| /movies?imdbID=[imdbID] | `POST`    | Object   | POST a new Movie into Application. |

# Comments

| Route                                         | HTTP Verb | RESPONSE | Description                     |
| --------------------------------------------- | --------- | -------- | ------------------------------- |
| /comments                                     | `GET`     | Array    | List all comments with movies.  |
| /comments?imdbID=[imdbID]&comment=['comment'] | `POST`    | Object   | POST a comment into Application |


# Information about Files 

- [Models](https://github.com/oraykt/shiny-memory/tree/master/models)
- [Services](https://github.com/oraykt/shiny-memory/tree/master/services)
- [Routes](https://github.com/oraykt/shiny-memory/tree/master/routes)
  <br/>
- [API Tests](https://github.com/oraykt/shiny-memory/blob/master/test/test.js)
  <br/>
- [Config](https://github.com/oraykt/shiny-memory/blob/master/config/prod.js)

## Installation

It doesn't have private npm repo currently so we need to clone Shiny-Memory from git repo and install it locally via 

```bash
git clone https://github.com/oraykt/shiny-memory.git && cd shiny-memory && npm install && npm start
```
