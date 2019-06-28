const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");
const jwtStrategy = require("passport").authenticate("jwt", { session: false })

// Matches with "/api/jobs"
router.route("/")
  .post(jwtStrategy, jobsController.create)
  .get(jobsController.findAll)

  module.exports = router;