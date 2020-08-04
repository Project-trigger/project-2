const router = require("express").Router();

const usersRoutes = require("./users.js");
const debateRoutes = require("./debates.js");

// api routes
router.use("/users", usersRoutes);
router.use("/debates", debateRoutes);

module.exports = router;
