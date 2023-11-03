const express = require("express");
const router = express.Router();
const Prod = require("./model");
router.get("/prod1", async (req, res) => {
  const prod = await Prod.find({});
  res.send(prod);
});

module.exports = router;
