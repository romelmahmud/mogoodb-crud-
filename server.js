const express = require("express");
const cors = require("cors");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("server is running ....");
});
