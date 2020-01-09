## Shiny Memory!

[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](https://oraykt-shiny-memory.herokuapp.com/)
[![Build Status](https://travis-ci.org/oraykt/shiny-memory.svg?branch=master)](https://travis-ci.org/oraykt/shiny-memory)


Develop Restful API with Express and MongoDB <br />

https://oraykt-shiny-memory.herokuapp.com/

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
