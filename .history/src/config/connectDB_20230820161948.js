const mysql = require("mysql2");
require("dotenv").config();

const connectDB = () => {
  const connectDatabase = mysql.createConnection({
    host: process.env.DB_host,
    port: process.env.DB_port,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
  });
};

const connectDatabase = mysql.createConnection({
  host: process.env.DB_host,
  port: process.env.DB_port,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
});

module.exports = {
  connectDatabase,
};
