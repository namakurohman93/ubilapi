const router = require("express").Router();
const { getChart } = require('billboard-top-100')

router.get("/", function(req, res) {
  res.send({ message: "Hello World! you are on api routes." });
});
router.get("/hot-100", function(req, res) {
  // first thing first, this is just dummy route
  // next update it will start implement billboard module

  /*
   * let top100 = [...new Array(100)].map(_ => 1)
   * res.send({
   *   response: {
   *     "top-100": top100
   *   }
   * })
   */
  getChart((err, chart) => {
    if (err) res.status(500).json({ message: "internal server error" })
    else {
      let { songs } = chart
      res.send({
        response: {
          "hot-100": songs
        }
      })
    }
  })
})

module.exports = router;
