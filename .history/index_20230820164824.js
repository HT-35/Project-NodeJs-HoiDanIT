const express = require("express");
const path = require("path");

const { connectDB } = require("./src/config/connectDB");

(async () => {
  const connection = connectDB(); // Kết nối cơ sở dữ liệu

  const query = 'SELECT * FROM `Users` WHERE `name` = "hoidanit"';
  try {
    const [results, fields] = await connection.promise().query(query);
    console.log(results); // Kết quả chứa các hàng được trả về bởi máy chủ
    console.log(fields); // Thông tin bổ sung về kết quả, nếu có
  } catch (err) {
    console.error("Lỗi truy vấn:", err);
  }
})();
query;

// biến môi trường
require("dotenv").config();

const app = express(); // app express

// nếu port trong process có vấn đề thì sẽ lấy port 3050
const PORT = process.env.PORT || 3050;
// const PORT = 3050;
//set file views
app.set("views", "./src/views");
// cấu hình virew engine
app.set("view engine", "ejs");

//set static public
app.use("/public", express.static(path.join(__dirname, "./src/public")));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Tran Quang Huy" });
});

app.get("/:slug", (req, res) => {
  res.send("404 notfound !!");
});

app.listen(PORT, () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
