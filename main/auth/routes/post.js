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

module.exports.postAdoptAPlot = (event, context, callback) => {
console.log('event', event);
  const post = `INSERT INTO ${table} VALUES(default, $1, $2, $3, $4, $5)`;
  const plotLongitude = event.body.plot_langitude;
  const plotLatitude = event.body.plot_latitude;
  const timeSpentMins = event.body.time_spent_mins;
  const bagsCollected = event.body.bags_collected;
  const numberOfParticipants = event.body.number_of_participants;

  pool.connect()
  .then(client => {
    client.release()
    return client.query(post, [plotLongitude, plotLatitude, timeSpentMins, bagsCollected, numberOfParticipants]);
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

module.exports.postHuki = (event, context, callback) => {
  console.log('event', event);
    const post = `INSERT INTO ${table} VALUES(default, $1, $2, $3, $4)`;
    const hukiDate = event.body.huki_date;
    const bagsCollected = event.body.bags_collected;
    const numberOfParticipants = event.body.number_of_participants;
    const timeSpentMins = event.body.time_spent_mins;
  
    pool.connect()
    .then(client => {
      client.release()
      return client.query(post, [hukiDate, bagsCollected, numberOfParticipants, timeSpentMins]);
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

  module.exports.postOrganizations = (event, context, callback) => {
    console.log('event', event);
      const post = `INSERT INTO ${table} VALUES(default, $1, $2, $3, $4)`;
      const timeSpentMins = event.body.time_spent_mins;
      const bagsCollected = event.body.bags_collected;
      const numberOfParticipants = event.body.number_of_participants;
      const organizationName = event.body.organization_name;
      
    
      pool.connect()
      .then(client => {
        client.release()
        return client.query(post, [time, bagsCollected, numberOfParticipants, organizationName]);
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