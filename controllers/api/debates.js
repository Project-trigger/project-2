const router = require("express").Router();
const debates = [];
// get route -> index
router.get("/debates", function(req, res) {
  res.json(debates);
});

module.exports = router;
