// connect db with mongodb drive
const { MongoClient, ObjectId } = require("mongodb");

const express = require("express");
const path = require("path");
const app = express(); // app express

// ...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const { root } = require("./src/router/root.router");

const root = require("./src/router/root.router");

const database = require("./src/config/db/connectMongoDB");

database.connect();

// biến môi trường
require("dotenv").config();

// gửi dữ liệu từ FORM lên server
app.use(
  express.urlencoded({
    extended: true,
  })
);
// gửi dữ liệu từ famework, postman,axios,.... lên server
app.use(express.json());

// nếu port trong process có vấn đề thì sẽ lấy port 3050
const PORT = process.env.PORT || 3050;
// const PORT = 3050;
//set file views
app.set("views", "./src/views");
// cấu hình virew engine
app.set("view engine", "ejs");

//set static public
app.use("/public", express.static(path.join(__dirname, "./src/public")));

// set router
app.use("/", root);

// connect db with mongodb drive
// Connection URL

const connectdbDrive = async () => {
  try {
    // Connection URL
    const url = "mongodb://127.0.0.1:27017";
    // Database Name
    const dbName = "hoidanit";

    const client = new MongoClient(url);

    async function main() {
      // Use connect method to connect to the server
      await client.connect();
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection("customermodels");

      // insert document in collection
      // const insertResult = await collection.insertMany([
      //   { name: "huy", address: "Đồng Nai", age: 3 },
      // ]);
      // console.log("Inserted documents =>", insertResult);

      // find All document in collection
      // const findResult = await collection.find({}).toArray();
      // console.log("Found documents =>", findResult);

      // find by id,.....

      const Id = "64f05cd8c8afdb3820f9c8e2";
      console.log(Id);
      const filteredDocs = await collection.findOne({
        _id: new ObjectId(Id),
      });
      console.log(
        "Found documents filtered by { _id: 64f05cd8c8afdb3820f9c8e2 } =>",
        filteredDocs
      );
    }
    main();
  } catch (error) {
    console.log(error);
  }
};
// connectdbDrive();

app.listen(PORT, () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
