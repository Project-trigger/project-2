const router = require("express").Router();
var db = require("../../models");

// post a user , route => ("api/user")
router.post("/signup", function (req, res) {
  console.log("hit signup route");
  // db.Users.create({
  //   username: req.body.usernmae,
  //   email: req.body.email,
  //   password: req.body.password,
  // }).then(function (dbCreateUser) {
  //   res.json(dbCreateUser);
  // });
});

// get a a user route => ("api/user")
router.post("/login", function (req, res) {
  console.log("hit login route");
  // console.log(req.body);
  // db.Users.findAll({
  //   where: {
  //     username: req.body.username,
  //   },
  // }).then(function (dbLoginUser) {
  //   //logic if no user found
  //   console.log(dbLoginUser);
  //   res.json(dbLoginUser);
  // });
});

module.exports = router;
