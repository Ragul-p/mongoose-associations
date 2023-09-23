const express = require("express");
const router = express.Router();
const { createPost, readPost } = require("../controller/post.controller");

router.post("/create-post", createPost);
router.get("/read-post", readPost);

module.exports = router;