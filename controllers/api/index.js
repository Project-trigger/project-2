const router = require("express").Router();
const burgerRoutes = require("./burger");
<<<<<<< HEAD

// Book routes
router.use("/burger", burgerRoutes);
=======
const debateRoutes = require("./debates");

// Book routes
router.use("/burger", burgerRoutes);
router.use("/debates", debateRoutes);
>>>>>>> a4f7018a63d92525dc2eced12dea5b4c97237cb9

module.exports = router;
