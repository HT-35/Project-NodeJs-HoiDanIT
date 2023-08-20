const mysql = require("mysql2");

const connectDatabase = () => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "huyA0123",
      database: "hoidanit",
    });
    connection;
    console.log("Connect Successfull !!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
