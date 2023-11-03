const mongoose = require("mongoose");
const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
  },
});
const products = mongoose.model("products", product);
module.exports = products;
