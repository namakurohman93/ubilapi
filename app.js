const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', require('./routes'))

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});

module.exports = app;
