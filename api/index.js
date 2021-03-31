const express = require("express");
const app = express();
const session = require("express-session");
const grant = require("grant").express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(3001, () => {
    console.log("server running at localhost:3001...");
})
