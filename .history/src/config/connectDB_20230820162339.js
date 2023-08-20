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
    connectDatabase.query(
      'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
      function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDB,
};
