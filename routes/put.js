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

module.exports.update = (event, context, callback) => {
console.log('event', event);
  const combo_id = event.body.combo_id;
  const email = event.body.email;
  const pass = event.body.pass;
  const update = `UPDATE ${table} SET  email = $2, pass = $3 WHERE combo_id = $1;`;
  console.log(update, "update");
  pool.connect()
  .then(client => {
    client.release()
    return client.query(update, [combo_id, email, pass]);
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
