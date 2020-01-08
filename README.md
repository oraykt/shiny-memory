## Shiny Memory!

Develop Restful API with Express and Mongoose <br />

# Movies

| Route   | HTTP Verb | POST body                          | Description                        |
| ------- | --------- | ---------------------------------- | ---------------------------------- |
| /movies | `GET`     | ARRAY                              | List all movies with comments.     |
| /movies | `POST`    | query{'imdbID': 'valid an imdbID'} | POST a new Movie into Application. |

# Comments

| Route     | HTTP Verb | POST body                                                   | Description                     |
| --------- | --------- | ----------------------------------------------------------- | ------------------------------- |
| /comments | `GET`     | Empty                                                       | List all comments with movies.  |
| /comments | `POST`    | query{'imdbID': 'valid an imdbID', 'comment':'\${comment}'} | POST a comment into Application |
