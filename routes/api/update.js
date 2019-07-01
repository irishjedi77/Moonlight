const router = require("express").Router();
const jwtStrategy = require("passport").authenticate("jwt", { session: false })
const userController = require("../../controllers/userController");

router
  .route("/")
  .put(jwtStrategy, userController.update)
  
router
  .route("/name")
  .put(jwtStrategy, userController.updateName)

router
  .route("/description")
  .put(jwtStrategy, userController.updateDescription)

  router
    .route("/phone")
    .put(jwtStrategy, userController.updatePhone)

router
  .route("/:_id")
  .get(userController.findProfileByName)
module.exports = router;
