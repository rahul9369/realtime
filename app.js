const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SeedDB = require("./seed");
const prodRouter = require("./route");

mongoose
  .connect("mongodb://127.0.0.1:27017/assingmentR")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Db is not connected");
    console.log(err);
  });

app.use(express.json());
//SeedDB();
app.use(prodRouter);

app.listen(8080, () => {
  console.log("server start at port 8080");
});
