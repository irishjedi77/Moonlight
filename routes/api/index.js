const router = require("express").Router();

// Book routes
router.use("/jobs", require("./jobs"));
router.use("/user", require("./user"));

module.exports = router;