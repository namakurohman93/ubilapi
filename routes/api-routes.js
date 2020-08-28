const router = require("express").Router();

router.get("/", function(req, res) {
  res.send({ message: "Hello World! you are on api routes." });
});
router.get("/top-100", function(req, res) {
  // first thing first, this is just dummy route
  // next update it will start implement billboard module

  let top100 = [...new Array(100)].map(_ => 1)
  res.send({
    response: {
      "top-100": top100
    }
  })
})

module.exports = router;
