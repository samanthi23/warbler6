const express = require("express");
const router = express.Router();
// import signin function that we just wrote
const { signup, signin } = require("../handlers/auth");

router.post("/signup", signup);
// change url to be /signin
router.post("/signin", signin);

module.exports = router;
