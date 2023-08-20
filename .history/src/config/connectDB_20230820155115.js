const mysql = require("mysql2");

const connectDatabase = () => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      port: 3307,
      user: "root",
      password: "123456",
      database: "hoidanit",
    });
    console.log("Connect Successfull !!!");
    return connection;
  } catch (error) {
    console.log(error);
  }
};
const queryDB = connectDatabase().query(
  'SELECT * FROM `Users` WHERE `name` = "hoidanit"',
  function (err, results, fields) {
    console.log(">>> results", results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

module.exports = {
  connectDatabase,
};
