const express = require("express");

const app = express(); // app express


C: \Users\ Mr.Huy\ Documents\ NodeJs\ Nodejs - HoiDanIT\ src\ views
    //set file views
app.set("view", "/src/views");
// cấu hình virew engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/:slug", (req, res) => {
    res.send("404 notfound !!");
});

app.listen("3000", () => {
    console.log(`địa chỉ:  http://localhost:3000`);
});