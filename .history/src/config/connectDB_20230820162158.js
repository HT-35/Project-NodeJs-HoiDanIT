const mysql = require("mysql2");
require("dotenv").config();

const connectDB = () => {
  try {
    const connectDatabase = mysql.createConnection({
      host: process.env.DB_host,
      port: process.env.DB_port,
      user: process.env.DB_user,
      password: process.env.DB_password,
      database: process.env.DB_database,
    });
    connectDatabase;
    console.log("thanh cong");
  } catch (error) {
    console.log(error);
  }
};

// const connectDatabase = mysql.createConnection({
//   host: process.env.DB_host,
//   port: process.env.DB_port,
//   user: process.env.DB_user,
//   password: process.env.DB_password,
//   database: process.env.DB_database,
// });

module.exports = {
  connectDB,
};
