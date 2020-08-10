const router = require('express').Router();
var db = require('../../models');
const jwt_decode = require('jwt-decode');

const getUser = (token) => {
    console.log(token);
    decoded = jwt_decode(token);
    return decoded[
        'http://localhost:3000/newdebates'
    ]
}

router.get('/newdebates', function (req, res) {
    let user = getUser(req.headers.authorization);

    db.Debates.findAll({
        where: {
            topic: req.query.topic
        },
        include: [
            {
                model: db.Topic,
                where: { user_email: email },
            },
        ],

    }).then(function (dbUsers){
        res.json(dbUsers);
    });
});



module.exports = router;
