const router = require("express").Router();
var db = require("../../models");

// this function grabs debates from the debates table.
router.get("/test", function (req, res) {
  db.Debates.findAll({}).then(function (dbDebate) {
    const debates = [];
    // console.log(dbDebate[0].topic);
    if (dbDebate[0] && dbDebate[0].topic ) {
      for (let index = 0; index < dbDebate.length; index++) {
        const element = dbDebate[index];
        console.log(element.topic);

      let debate = {topic: "", incumbent_body: "", challenger_body: ""};
      debate.topic=element.topic;
      debate.incumbent_body=element.incumbent_body;
      debate.challenger_body=element.challenger_body;
      debates.push(debate)

      }

      res.json(debates);
    } else {
      res.send("Topic not found");
    }
  });
});


router.post("/newdebates", function(req, res) {
  console.log(req.body)

  db.Users.create({
    email: req.body.email,
    username: req.body.username
  }).then(function(result) {
    console.log(result.id)
    db.Debates.create({
     user_id: result.id,
     topic: req.body.topic,
     incumbent_body: req.body.incumbent_body,
     challenger_body: req.body.challenger_body,
     incumbent_username: req.body.username

    }).then(function (dbDebate) {
      console.log(dbDebate)
      res.json(dbDebate)
    })
  })
 

})


module.exports = router;
