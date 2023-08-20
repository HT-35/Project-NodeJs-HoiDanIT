const mysql = require("mysql2");

const connectDatabase = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "123456",
    database: "hoidanit",
  });
};
