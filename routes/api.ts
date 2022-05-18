// @ts-nocheck
const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res) => {
    res.send("API HOi");
});

module.exports = {
  name: "api",
  location: "api",
  router: router
}