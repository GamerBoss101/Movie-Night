// @ts-nocheck
const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res) => {
    res.send("HOi");
});

module.exports = {
  name: "index",
  location: "",
  router: router
}