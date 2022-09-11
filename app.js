const express = require("express");
const path = require("path");
const app = express();

app.get(`/gadgets`, (request, response) => {
  response.sendFile("gadgets.html", { root: __dirname });
  console.log("sent file");
});
module.exports = app;
