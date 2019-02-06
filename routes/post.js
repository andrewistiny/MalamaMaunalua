'use strict';
const Pool = require('pg-pool');
const config = require("../config.json");
const {table,host,database,user,password,port} = config;
const pool =  new  Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});

module.exports.postMovie = (event, context, callback) => {
console.log('event', event);
const movie_name = event.body.movie_title;
const movie_genre = event.body.movie_genre;
const movie_year = event.body.movie_year_released;
  const postNewMovie = `INSERT INTO ${table} VALUES(default, $1, $2, $3)`;
  
  pool.connect()
  .then(client => {
    client.release()
    return client.query(postNewMovie, [movie_name, movie_year, movie_genre]);
  })
  .then(res => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      message: res,
    }),
  };

    callback(null, response);
  })
  .catch(err => {
    console.log('err', err);
  })
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
