const router = require("express").Router();
var db = require("../../models");

// this function grabs debates from the debates table.
router.get("/test", function (req, res) {
  db.Debates.findAll({}).then(function (dbDebate) {
    const debates = [];
    console.log(dbDebate[0].topic);
    for (let index = 0; index < dbDebate.length; index++) {
      const element = dbDebate[index];
      console.log(element.topic);
      let debate = {
        topic: "villains",
        incumbent_body: "joker",
        challenger_body: "lex luther",
      };
      debate.topic = element.topic;
      debate.incumbent_body = element.incumbent_body;
      debate.challenger_body = element.challenger_body;
      debates.push(debate);
    }

    res.json(debates);
  });
});

router.post("/newdebates", function (req, res) {
  console.log("hit newDebates route");
  db.Debates.create(req.body).then(function (dbDebates) {
    res.json(dbDebates);
  });
  res.send("route finished");
});

module.exports = router;
