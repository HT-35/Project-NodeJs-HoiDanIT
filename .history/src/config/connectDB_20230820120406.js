const mysql = require("mysql2");

const connectDatabase = () => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "123456",
      database: "hoidanit",
    });
  } catch (error) {
    console.log(error);
  }
};
