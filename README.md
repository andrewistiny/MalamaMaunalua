# Movie List

[Advanced] AWS, S3, Api-Gatway, Lambda, RDS, Serverless - Intro full stack project using amazon rds

## Objective
You will be creating a full stack application. A client will be able to make HTTP requests to a PostgreSQL database through Amazon RDS.

## Project Example 
[movie list](http://movie-list-jay.s3-website-us-west-2.amazonaws.com/index.html)

## Prerequisites
- Basic understanding of API's.
- Basic understanding of JSON.
- Basic understanding of AWS Lambda
- Basic understanding of Amazon S3
- Basic understanding of Amazon API-Gateway
- Basic understanding of Serverless & CLI
- Basic understanding of AWS CLI
- Basic understanding of PostgreSQL
- Basic understanding of HTTP Methods

## Setup
- Fork and Clone Repo
- Create serverless template 
- Create `package.json` file
- npm install `pg`
- npm install `pg-pool`


#### File Structure 
```
movie-list
|
+-- public
|    |
|    +-- edit
|    |   |
|    |   +-- edit.js
|    |   +-- edit.html
|    |   +-- edit.css
|    +-- post
|    |   |
|    |   +-- post.js
|    |   +-- post.html
|    |   +-- post.css
|    +-- index.html
|    +-- index.js
|    +-- index.css
+-- routes
|    |
|    +-- get.js
|    +-- post.js
|    +-- update.js
|    +-- delete.js
+-- test-data
|    +-- delete.json
|    +-- post.json
|    +-- update.json
+-- config.json
+-- node_modules
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- serverless.yml
```

# Back-End
Connect to remote AWS RDS Postgres

- When connected to your database, create a table with the following columns:
  - movie_id
  - movie_title
  - movie_year_released
  - movie_genre
  
- Create GET, POST, PUT, DELETE routes
  
 # Front-End
 - Homepage should `GET` all movies from backend
 - Create a link that directs you to a `POST` form
 - Create a link that directs you to `EDIT` form
 
 **HINT** Use [Local Storage](https://github.com/junior-devleague/local-storage-demo) to save movie_id when you redirect to `EDIT` form 
 
