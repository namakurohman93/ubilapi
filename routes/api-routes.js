const router = require("express").Router();

router.get("/", function(req, res) {
  res.send({ message: "Hello World! you are on api routes." });
});

module.exports = router;
