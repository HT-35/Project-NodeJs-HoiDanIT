const mysql = require("mysql2");
require("dotenv").config();
const mysql = require("mysql2");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connectDatabase = mysql.createConnection({
      host: process.env.DB_host,
      port: process.env.DB_port,
      user: process.env.DB_user,
      password: process.env.DB_password,
      database: process.env.DB_database,
    });

    connectDatabase.connect((err) => {
      if (err) {
        console.error("Lỗi kết nối cơ sở dữ liệu:", err);
        return;
      }
      console.log("Kết nối cơ sở dữ liệu thành công!");
    });

    return connectDatabase;
  } catch (error) {
    console.error("Lỗi khi kết nối cơ sở dữ liệu:", error);
    throw error; // Ném lỗi để xử lý ở phía gọi hàm
  }
};

module.exports = connectDB;
