const router = require("express").Router();
const burgerRoutes = require("./burger");
const debateRoutes = require("./debates");

// Book routes
router.use("/burger", burgerRoutes);
router.use("/debates", debateRoutes);

module.exports = router;
