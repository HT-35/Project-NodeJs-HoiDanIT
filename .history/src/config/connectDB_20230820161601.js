const mysql = require("mysql2");
require("dotenv").config();

const connectDatabase = () => {
  try {
    const connection = mysql.createConnection({
      host: process.env.DB_host,
      port: process.env.DB_port,
      user: process.env.DB_user,
      password: process.env.DB_password,
      database: process.env.DB_database,
    });
    console.log("Connect Successfull !!!");
    return connection;
  } catch (error) {
    console.log(error);
  }
};
// const queryDB = () => {
//   connectDatabase().query(
//     'SELECT * FROM `Users` WHERE `name` = "hoidanit"',
//     function (err, results, fields) {
//       console.log(">>> results", results); // results contains rows returned by server
//       console.log(">>> fields", fields); // fields contains extra meta data about results, if available
//     }
//   );
// };
module.exports = {
  connectDatabase,
};
