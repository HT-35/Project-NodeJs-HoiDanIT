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

module.exports = {
  connectDatabase,
};
