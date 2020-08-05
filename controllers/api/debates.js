const router = require("express").Router();
var db = require("../../models");

// create model for arguments
// change line 6 to pull from database
router.get("/test", function (req, res) {
  // res.json(debates);
  db.Debates.findAll({

    }).then(function (dbDebate) {
      //logic if no user found
      const debates = []
      console.log(dbDebate[0].topic)
      for (let index = 0; index < dbDebate.length; index++) {
        const element = dbDebate[index];
        console.log(element.topic);
      let debate = {topic: "villains", incumbent_body: "joker", challenger_body: "lex luther"};
      debate.topic=element.topic;
      debate.incumbent_body=element.incumbent_body;
      debate.challenger_body=element.challenger_body;
      debates.push(debate)
      }
      
      res.json(debates);
    });
});

// router.post("/postChallengerDebates", function (req, res) {
//   console.log("hit post debates route");
//   debates.
//   debates.topic = dbDebate[i].topic;
//   debates.challenger_body = dbDebate[i].challenger_body;
//   res.json(debates);
// });


module.exports = router;
