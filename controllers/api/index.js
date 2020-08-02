const router = require("express").Router();
const usersRoutes = require("./users");
const debateRoutes = require("./debates");

// Book routes
router.use("/users", usersRoutes);
router.use("/debates", debateRoutes);

module.exports = router;
