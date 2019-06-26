const router = require("express").Router();
const jwtStrategy = require("passport").authenticate("jwt", { session: false });

// Book routes
router.use("/jobs", require("./jobs"));
router.use("/user", require("./user"));
router.use("/update", jwtStrategy, require("./update"))

module.exports = router;