require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  DB_URL: process.env.DB_URL,
  dialectModule: "pg",
  dialect: 'postgres',
  operatorsAliases: '0',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};



// require('dotenv').config()
// module.exports={
// "development": {
// "username": process.env.DB_USER,
// "password": process.env.DB_PASSWORD,
// "database": process.env.DB_NAME,
// "url": process.env.DB_URL,
// "host": process.env.DB_HOST,
// "dialect": 'postgres',
// },
// }


// const { Client } = require('pg');
// const client = new Client({
// development: {
//   dialect: 'postgres',
//   HOST: process.env.DB_HOST,
//   USER: process.env.DB_USER,
//   PASSWORD: process.env.DB_PASSWORD,
//   DB: process.env.DB_NAME,
//   DB_URL: process.env.DB_URL,
//   dialectModule: "pg",
//   operatorsAliases: '0',
//   // pool: {
//   //   max: 5,
//   //   min: 0,
//   //   acquire: 30000,
//   //   idle: 10000
//   // },
// },
// test: {
//   dialect: 'postgres',
//   HOST: process.env.DB_HOST,
//   USER: process.env.DB_USER,
//   PASSWORD: process.env.DB_PASSWORD,
//   DB: process.env.DB_NAME,
//   DB_URL: process.env.DB_URL,
//   dialectModule: "pg",
//   operatorsAliases: '0',
//   // pool: {
//   //   max: 5,
//   //   min: 0,
//   //   acquire: 30000,
//   //   idle: 10000
//   // },
// },
// production: {
//   dialect: 'postgres',
//   HOST: process.env.DB_HOST,
//   USER: process.env.DB_USER,
//   PASSWORD: process.env.DB_PASSWORD,
//   DB: process.env.DB_NAME,
//   DB_URL: process.env.DB_URL,
//   dialectModule: "pg",
//   operatorsAliases: '0',
//   // pool: {
//   //   max: 5,
//   //   min: 0,
//   //   acquire: 30000,
//   //   idle: 10000
//   // },
// }
// });


// client.connect();
// client.query("select * from cad_client")
//      .then(results => {
//          const result = results.rows
//          console.log(result)
//      })
//      .finally(() => client.end())
