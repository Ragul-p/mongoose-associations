const express = require("express");
const router = express.Router();
const { create, read } = require("../controller/student-cource.controller");

router.post("/create", create);
router.get("/read", read);

module.exports = router;