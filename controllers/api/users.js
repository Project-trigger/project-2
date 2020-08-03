const router = require("express").Router();
var db = require("../../models");

// post a user , route => ('api/user')
router.post("/", function (req, res) {
  db.Users.create({
    username: req.body.usernmae,
    email: req.body.email,
    password: req.body.password,
  }).then(function (dbCreateUser) {
    res.json(dbCreateUser);
  });
});

// get a a user route => ('api/user')
router.get ("/", function (req, res) {
  db.Users.get({
    username: req.body.usernmae,
    password: req.body.password
  }).then(function (dbLoginUser) {
    res.json(dbLoginUser);
  });
});

module.exports = router;
