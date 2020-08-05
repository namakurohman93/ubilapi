const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", function(req, res) {
  res.send({ message: "Hello World!" });
});

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});

module.exports = app;
