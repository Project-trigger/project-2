const router = require("express").Router();
var db = require("../../models");
let debates = {topic: "villains", incumbent_body: "joker", challenger_body: "lex luther"};
// create model for arguments
// change line 6 to pull from database
router.get("/", function(req, res) {
  // res.json(debates);
  db.Debates.findAll({
    }).then(function (dbDebate) {
      //logic if no user found
      console.log(dbDebate[0].topic);
      debates.topic=dbDebate[1].topic;
      debates.incumbent_body=dbDebate[1].incumbent_body;
      debates.challenger_body=dbDebate[1].challenger_body;
      res.json(debates);
    });
});

module.exports = router;
