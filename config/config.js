require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  DB_URL: process.env.DB_URL,
  dialectModule: "pg",
  dialect: 'postgres'
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