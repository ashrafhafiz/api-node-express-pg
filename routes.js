const express = require("express");
const router = express.Router();
const db = require("./queries");

router.route("/users").get(db.getUsers).post(db.createUser);

router
  .route("/users/:id")
  .get(db.getUserById)
  .put(db.updateUser)
  .delete(db.deleteUser);

module.exports = router;
