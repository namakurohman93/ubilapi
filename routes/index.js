const router = require("express").Router();

const apiRoutes = require("./api-routes");

router.get("/", function(req, res) {
  res.send({ message: "Hello World!" });
});
router.use("/api", apiRoutes);

module.exports = router;
