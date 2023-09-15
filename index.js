const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const routes = require("./routes/routes.js");
const process = require("process");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mongoDB = new MongoClient(process.env.MONGODBURL);
mongoDB
  .connect()
  .then(() => {
    console.log("Database is connected");
    app.use(routes);
  })
  .catch((err) => {
    console.log("Database is not connected");
  });
app.listen(5000, () => {
  console.log("app is listening at port 5000");
});
